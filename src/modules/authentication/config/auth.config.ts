export interface AuthConfig {
  routes: {
    login: string;
    register: string;
    forgotPassword: string;
    resetPassword: string;
    defaultPostLoginRedirect: string;
    defaultPostLogoutRedirect: string;
    unauthorizedRedirect: string;
  };
  features: {
    enableRegistration: boolean;
    enableRememberMe: boolean;
    enablePasswordToggle: boolean;
    minPasswordLength: number;
  };
  branding: {
    title: string;
    description: string;
    showLogo: boolean;
  };
}

export const authConfig: AuthConfig = {
  routes: {
    login: "/login",
    register: "/register",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
    defaultPostLoginRedirect: "/dashboard",
    defaultPostLogoutRedirect: "/login",
    unauthorizedRedirect: "/login",
  },
  features: {
    enableRegistration: true,
    enableRememberMe: true,
    enablePasswordToggle: true,
    minPasswordLength: 8,
  },
  branding: {
    title: "Next.js Core Starter",
    description: "Secure, modern authentication foundation",
    showLogo: true,
  },
};
