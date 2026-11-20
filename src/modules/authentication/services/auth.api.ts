import { baseApi } from "@/services/base-api";
import { API_TAGS } from "@/constants";
import type {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
  ForgotPasswordPayload,
  ResetPasswordPayload,
  MessageResponse,
} from "../types/auth.types";

/**
 * Authentication RTK Query service.
 * Injected into the centralized baseApi.
 */
export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Current authenticated user session verification
    getCurrentUser: builder.query<AuthResponse, void>({
      query: () => "/auth/me",
      providesTags: [API_TAGS.USER],
    }),

    // User login
    login: builder.mutation<AuthResponse, LoginPayload>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: [API_TAGS.USER],
    }),

    // User registration
    register: builder.mutation<AuthResponse, RegisterPayload>({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: [API_TAGS.USER],
    }),

    // User logout
    logout: builder.mutation<MessageResponse, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: [API_TAGS.USER],
    }),

    // Forgot password request
    forgotPassword: builder.mutation<MessageResponse, ForgotPasswordPayload>({
      query: (payload) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: payload,
      }),
    }),

    // Password reset submission
    resetPassword: builder.mutation<MessageResponse, ResetPasswordPayload>({
      query: (payload) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: payload,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCurrentUserQuery,
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
