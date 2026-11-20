"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  useGetCurrentUserQuery,
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
} from "../services/auth.api";
import { authConfig } from "../config/auth.config";
import { getErrorMessage } from "@/utils/error";
import type { LoginPayload, RegisterPayload, AuthUser } from "../types/auth.types";

export function useAuth() {
  const router = useRouter();

  // Query current user from backend session/cookie
  const {
    data: authData,
    isLoading: isUserLoading,
    isFetching,
    refetch,
  } = useGetCurrentUserQuery(undefined, {
    // Avoid re-fetching on window focus constantly if unauthenticated
    refetchOnFocus: false,
  });

  const [loginMutation, { isLoading: isLoggingIn }] = useLoginMutation();
  const [registerMutation, { isLoading: isRegistering }] = useRegisterMutation();
  const [logoutMutation, { isLoading: isLoggingOut }] = useLogoutMutation();

  const user: AuthUser | null = authData?.user ?? null;
  const isAuthenticated = Boolean(user);
  const isLoading = isUserLoading || isLoggingIn || isRegistering || isLoggingOut;

  const login = async (payload: LoginPayload, redirectUrl?: string) => {
    try {
      const response = await loginMutation(payload).unwrap();
      toast.success("Welcome back!", {
        description: `Signed in as ${response.user.email}`,
      });
      router.push(redirectUrl || authConfig.routes.defaultPostLoginRedirect);
      return response;
    } catch (error) {
      const message = getErrorMessage(error);
      toast.error("Authentication failed", { description: message });
      throw error;
    }
  };

  const register = async (payload: RegisterPayload, redirectUrl?: string) => {
    try {
      const response = await registerMutation(payload).unwrap();
      toast.success("Account created successfully!", {
        description: `Welcome, ${response.user.firstName}!`,
      });
      router.push(redirectUrl || authConfig.routes.defaultPostLoginRedirect);
      return response;
    } catch (error) {
      const message = getErrorMessage(error);
      toast.error("Registration failed", { description: message });
      throw error;
    }
  };

  const logout = async (redirectUrl?: string) => {
    try {
      await logoutMutation().unwrap();
      toast.info("Signed out", {
        description: "You have been logged out safely.",
      });
    } catch {
      // Even if network fails, redirect to clear local UI state
      toast.info("Signed out");
    } finally {
      router.push(redirectUrl || authConfig.routes.defaultPostLogoutRedirect);
    }
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    isFetching,
    login,
    register,
    logout,
    refetchUser: refetch,
  };
}
