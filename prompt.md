# Build a Reusable Next.js Authentication Module

## Role

Act as a Senior Next.js Architect and Security-Focused Full-Stack Developer.

I already have a completed Next.js Core Starter Template.

I also have an optional Dashboard Module that may or may not be installed.

Your task is to build a reusable, modular Authentication Module that integrates with the existing Core Template.

The Authentication Module must be independently usable with or without the Dashboard Module.

## 1. Important Instructions

Before implementation:

1. Inspect the existing project.
2. Read README.md.
3. Inspect the Core Template architecture.
4. Inspect Redux Toolkit and RTK Query configuration.
5. Inspect existing providers.
6. Inspect the optional Dashboard Module if it exists.
7. Reuse existing components, utilities, and configurations.

Strict rules:

- Do not recreate the Core Template.
- Do not overwrite existing configurations unnecessarily.
- Do not duplicate global providers.
- Do not introduce unnecessary dependencies.
- Never use TypeScript `any`.
- Never hardcode secrets.
- Never use insecure token storage.
- Keep Authentication independently removable.

## 2. Technology Stack

Reuse existing technologies:

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- React Hook Form
- Zod
- Redux Toolkit
- RTK Query
- Sonner
- Lucide React

Use the existing API architecture.

Do not install another state management or form library.

Do not introduce Auth.js unless explicitly required by a future project.

## 3. Module Architecture

Create:

```text
src/
├── app/
│   └── (auth)/
│       ├── login/
│       │   └── page.tsx
│       ├── register/
│       │   └── page.tsx
│       ├── forgot-password/
│       │   └── page.tsx
│       ├── reset-password/
│       │   └── page.tsx
│       └── layout.tsx
│
├── modules/
│   └── authentication/
│       ├── components/
│       │   ├── login-form.tsx
│       │   ├── register-form.tsx
│       │   ├── forgot-password-form.tsx
│       │   ├── reset-password-form.tsx
│       │   └── auth-layout.tsx
│       │
│       ├── services/
│       │   └── auth.api.ts
│       │
│       ├── hooks/
│       │   └── use-auth.ts
│       │
│       ├── schemas/
│       │   └── auth.schema.ts
│       │
│       ├── types/
│       │   └── auth.types.ts
│       │
│       ├── config/
│       │   └── auth.config.ts
│       │
│       ├── utils/
│       │
│       └── index.ts
```

Adjust the structure if necessary.

Keep authentication-specific functionality inside this module.

Keep Next.js route files thin.

## 4. Authentication Features

Implement the following features:

### A. Login

Fields:

- Email
- Password
- Remember Me (optional, only if supported by the backend)

Requirements:

- Email validation.
- Required field validation.
- Password visibility toggle.
- Loading state.
- API error handling.
- Success notification.
- Redirect after successful login.

### B. Registration

Fields:

- First Name
- Last Name
- Email
- Password
- Confirm Password

Requirements:

- Required field validation.
- Email validation.
- Password strength validation.
- Confirm password matching.
- Loading state.
- API error handling.
- Success notification.

Keep registration fields configurable because different projects may require different user information.

### C. Forgot Password

Fields:

- Email.

Requirements:

- Email validation.
- Submit request.
- Loading state.
- Success feedback.

Use a generic success message that does not expose whether an email exists in the system.

### D. Reset Password

Fields:

- New Password.
- Confirm Password.

Requirements:

- Validate password.
- Confirm password matching.
- Read reset token from the URL when required.
- Handle expired or invalid tokens.
- Submit the reset request.

### E. Logout

Requirements:

- Call the configured backend logout endpoint.
- Clear user session.
- Clear relevant client-side cached data.
- Redirect to the login page or configured public route.
- Handle logout failures safely.

## 5. API Architecture

Integrate with the existing RTK Query base API.

Create:

`src/modules/authentication/services/auth.api.ts`

Provide endpoint definitions for:

- Login.
- Register.
- Logout.
- Get Current User.
- Forgot Password.
- Reset Password.

Important:

The actual backend API is not provided.

Do not assume that any endpoint already exists.

Create a centralized configurable API contract and document the expected request and response structures.

Use clearly identified example endpoint paths that can be changed to match the actual backend.

Example conceptual contract:

```ts
interface LoginPayload {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthResponse {
  user: User;
}
```

Adapt the actual response types to the agreed backend contract.

Requirements:

- Proper TypeScript types.
- API error handling.
- Cache invalidation.
- Session synchronization.
- No duplicate base API.
- No hardcoded API URLs.

## 6. Session & Security Architecture

Security is a critical requirement.

Do not store authentication access tokens, refresh tokens, or session credentials in:

- localStorage
- sessionStorage
- Redux Persist
- Browser-accessible JavaScript storage

Prefer a backend-managed session using Secure, HttpOnly, SameSite cookies.

The backend should be responsible for issuing and invalidating secure cookies.

If the backend uses a different authentication contract, document the required integration changes.

Requirements:

- Secure session handling.
- Proper logout behavior.
- Session expiration handling.
- Unauthorized response handling.
- Protected route architecture.
- Avoid exposing sensitive credentials.
- Avoid leaking private server environment variables.

Do not pretend that frontend-only route protection provides real security.

Actual authorization must be enforced by the backend.

If server-side route protection is implemented, use a server-verifiable session mechanism and the appropriate Next.js request interception architecture for the installed Next.js version.

Do not introduce an insecure middleware implementation just to satisfy route protection.

## 7. Authentication State

Create a reusable authentication hook.

Example:

```ts
interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => Promise<void>;
}
```

Requirements:

- Centralized user state.
- Current user fetching.
- Loading state.
- Authentication state synchronization.
- Session expiration handling.

Use the existing RTK Query cache as the primary client-side source of server data where practical.

Avoid maintaining multiple conflicting copies of user information.

Do not add Redux Persist for sensitive authentication data.

## 8. Route Protection

Provide an optional route protection mechanism.

Requirements:

- Public routes.
- Protected routes.
- Unauthenticated redirect.
- Post-login redirect.
- Configurable redirect paths.

Make it compatible with Next.js App Router.

Keep the protection mechanism optional and configurable.

Do not require Dashboard Module to use Authentication.

If Dashboard Module exists, provide a documented integration example for protecting dashboard routes.

## 9. Authentication UI

Create a clean and professional authentication layout.

Requirements:

- Responsive design.
- Mobile-friendly forms.
- Consistent spacing.
- Accessible labels.
- Password visibility controls.
- Loading states.
- Error states.
- Success feedback.

Use existing shadcn/ui components.

Support the global light and dark themes.

Do not create a separate design system.

Keep the UI customizable through configuration.

## 10. Validation

Create reusable Zod schemas:

- Login schema.
- Registration schema.
- Forgot password schema.
- Reset password schema.

Use React Hook Form and the existing resolver integration.

Requirements:

- Type-safe validation.
- Clear validation messages.
- Password matching.
- Consistent error handling.

Do not duplicate validation rules unnecessarily.

## 11. Configuration

Create a centralized authentication configuration.

Allow developers to customize:

- Login route.
- Registration route.
- Forgot password route.
- Default post-login redirect.
- Default post-logout redirect.
- Registration availability.
- Password visibility options.
- Authentication UI branding.

Keep configuration type-safe.

Do not add unnecessary configuration complexity.

## 12. Optional Dashboard Integration

If the Dashboard Module exists:

- Allow protected dashboard routes.
- Allow authenticated user information in the dashboard navbar.
- Allow logout from the user menu.
- Allow role-based navigation integration.
- Support future permission-based navigation.

If the Dashboard Module does not exist, Authentication must still work independently.

Do not create a Dashboard Module automatically.

## 13. Environment Variables

Update `.env.example` only when necessary.

Use the existing API URL configuration.

If additional server-side environment variables are required, document them.

Never expose private credentials using `NEXT_PUBLIC_` variables.

## 14. Documentation

Update the existing README.md.

Add a dedicated Authentication Module section.

Document:

1. Authentication architecture.
2. Folder structure.
3. Supported authentication flows.
4. API endpoint contract.
5. Request and response types.
6. Backend integration instructions.
7. Session and cookie security.
8. Authentication state management.
9. Route protection.
10. How to configure redirect paths.
11. How to customize authentication forms.
12. How to disable registration.
13. How to integrate with Dashboard.
14. How to remove Authentication Module.

Clearly explain which parts require backend support.

Do not document unimplemented features.

## 15. Development Rules

1. Never use TypeScript `any`.
2. Never store sensitive tokens in localStorage.
3. Never hardcode credentials.
4. Never assume backend endpoints exist.
5. Do not create fake authentication success.
6. Do not bypass backend authorization.
7. Avoid duplicated API configurations.
8. Reuse Core Template components.
9. Reuse existing providers.
10. Keep Authentication independently removable.
11. Use proper error handling.
12. Ensure responsive design.
13. Avoid hydration errors.
14. Keep code modular and maintainable.

## 16. Implementation Workflow

### Phase 1: Project Inspection

Inspect the existing Core Template and optional Dashboard Module.

### Phase 2: Architecture

Create the authentication module structure and define API contracts.

### Phase 3: Validation

Implement Zod schemas and React Hook Form integration.

### Phase 4: API Integration

Integrate authentication endpoints with existing RTK Query.

### Phase 5: Authentication UI

Implement login, registration, forgot password, and reset password.

### Phase 6: Session Management

Implement the configured session and current-user architecture.

### Phase 7: Route Protection

Implement optional route protection using server-verifiable authentication.

### Phase 8: Dashboard Integration

Integrate with Dashboard only if the module exists.

### Phase 9: Documentation

Update README.md with complete implementation details.

### Phase 10: Quality Assurance

Run:

```bash
pnpm lint
pnpm type-check
pnpm build
```

Fix all errors.

Verify all authentication flows using a real backend or a clearly identified mock test environment.

Do not claim real authentication works without backend integration.

## 17. Final Deliverables

Provide:

1. Complete Authentication Module.
2. Login and Registration.
3. Forgot Password.
4. Reset Password.
5. Logout.
6. API integration architecture.
7. Session management architecture.
8. Route protection.
9. Reusable authentication hooks.
10. Validation schemas.
11. Responsive authentication UI.
12. Updated README.md.
13. Security implementation notes.
14. Quality assurance report.

Final instruction:

Build Authentication as an independently configurable optional module. It must integrate cleanly with the existing Core Template and must not require the Dashboard Module.
