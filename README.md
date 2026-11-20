# Next.js Core Starter Template

A production-ready, highly extensible, and type-safe Next.js Core Starter Template designed to serve as the standardized foundation for modern web applications.

---

## 1. Project Overview

### What the template is

The Next.js Core Starter Template is an opinionated boilerplate built with the Next.js App Router, TypeScript (strict mode), Tailwind CSS v4, shadcn/ui primitives, Redux Toolkit with RTK Query, React Hook Form, and Zod.

### Why it exists

Starting new web applications frequently involves repetitive setup: configuring CSS variables and Tailwind design tokens, setting up global Redux store and API slices, configuring form management with schema validation, wiring theme switching without hydration flicker, and setting up clean folder structures. This template eliminates that repetitive boilerplate work.

### Main objectives

- **Zero Repetition**: Jump straight into feature development with all core infrastructure pre-configured.
- **Architectural Discipline**: Strict separation between UI components, global state, API services, utilities, and feature modules.
- **Strict Type Safety**: End-to-end type safety with TypeScript strict mode enabled and zero use of `any`.
- **Lightweight & Modular**: Intentionally focused on the core boilerplate without coupling to specific backends, authentication providers, or business-specific dashboards.

### Architecture philosophy

- **Server Components by Default**: React Server Components (RSC) are leveraged by default for optimal bundle size and initial load performance. Client components (`"use client"`) are used strictly when state, events, or browser APIs are required.
- **Unified Design Tokens**: Colors, borders, radii, and backgrounds are managed through standard CSS variables supporting seamless light and dark mode switching.
- **Centralized API & State**: RTK Query endpoints inject into a single base API service, facilitating scalable modular development without monolithic store files.

---

## 2. Technology Stack

| Category                 | Technology            | Version             | Purpose                                                                                 |
| :----------------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| **Framework**            | Next.js (App Router)  | `^15.1.7`           | Hybrid server/client rendering, file-system routing, layouts, and server optimizations. |
| **Language**             | TypeScript            | `^5.7.3`            | Type safety and static analysis in strict mode.                                         |
| **UI Library**           | React / React DOM     | `^19.0.0`           | Latest concurrent React engine with server component support.                           |
| **Styling**              | Tailwind CSS v4       | `^4.0.7`            | Modern CSS-first utility framework with native `@theme` integration.                    |
| **Component Primitives** | shadcn/ui & Radix UI  | Latest              | Headless, accessible, customizable UI primitives.                                       |
| **Icons**                | Lucide React          | `^0.475.0`          | Clean, customizable SVG icons.                                                          |
| **State Management**     | Redux Toolkit         | `^2.5.1`            | Predictable centralized state management.                                               |
| **Data Fetching**        | RTK Query             | Built-in            | Powerful caching, automatic re-fetching, and endpoint injection.                        |
| **Form Management**      | React Hook Form       | `^7.54.2`           | High-performance, uncontrolled form state with minimal re-renders.                      |
| **Schema Validation**    | Zod                   | `^3.24.2`           | Declarative, TypeScript-first schema declaration and validation.                        |
| **Theme System**         | next-themes           | `^0.4.4`            | Dark mode, light mode, and system preference with zero hydration mismatch.              |
| **Toasts**               | Sonner                | `^2.0.1`            | Clean, customizable toast notifications.                                                |
| **CSS Utilities**        | clsx & tailwind-merge | `^2.1.1` / `^3.0.1` | Dynamic conditional class merging without Tailwind class collisions.                    |
| **Code Formatting**      | Prettier              | `^3.5.1`            | Consistent code styling and Tailwind class sorting.                                     |
| **Code Linting**         | ESLint                | `^9.20.1`           | Code quality, best practice enforcement, and Next.js web vitals.                        |

---

## 3. Features

- **Next.js 15 App Router**: Server components by default, nested layouts, loading states, error boundaries, and custom 404 pages.
- **Tailwind CSS v4 Integration**: Configured via `@tailwindcss/postcss` and CSS design tokens in `globals.css`.
- **Pre-installed shadcn/ui Primitives**: Button, Input, Textarea, Label, Select, Checkbox, Radio Group, Switch, Card, Badge, Dialog, Dropdown Menu, Table, Avatar, Skeleton, Separator, and Tooltip.
- **Reusable Shared UI**: Page loader, empty state, error state, confirm dialog, section heading, and theme switcher.
- **Centralized Redux & RTK Query**: Scalable base API with tag-based caching, error handling, and endpoint code-splitting support.
- **Type-Safe Form Architecture**: React Hook Form connected with Zod validation via `@hookform/resolvers/zod`.
- **Theme Switching**: Supports Light, Dark, and System preference with smooth transitions and hydration safety.
- **Strict Developer Environment**: ESLint flat config with Next.js rules, Prettier with Tailwind plugin, and zero `any` tolerance.
- **Comprehensive Utility Suite**: Formatter functions for dates, currencies, byte sizes, strings, errors, and custom debounce logic.

---

## 4. Prerequisites

Before setting up the project, make sure the following tools are installed:

- **Node.js**: `v20.x` or higher (tested on Node `v24.x`)
- **Package Manager**: `npm` `v10.x` or higher
- **Version Control**: `git`

Check your versions:

```bash
node -v
npm -v
git --version
```

---

## 5. Installation Guide

### 1. Clone the repository

```bash
git clone <repository-url> <project-directory>
cd <project-directory>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the sample environment file to create your local environment:

```bash
cp .env.example .env.local
```

### 4. Run development mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production

```bash
npm run build
```

### 6. Run production mode

```bash
npm run start
```

---

## 6. Project Structure

The project follows a clean, modular `src/` directory layout:

```text
nextjs-starter-template/
│
├── public/                     # Static public assets
│   ├── fonts/                  # Custom font files (.gitkeep)
│   ├── icons/                  # Application icons (.gitkeep)
│   └── images/                 # Static images (.gitkeep)
│
├── src/
│   ├── app/                    # Next.js App Router root
│   │   ├── error.tsx           # Global error boundary component
│   │   ├── globals.css         # Tailwind v4 imports and theme variables
│   │   ├── layout.tsx          # Root layout wrapping AppProvider
│   │   ├── loading.tsx         # Global loading indicator
│   │   ├── not-found.tsx       # Custom 404 page
│   │   └── page.tsx            # Starter demo homepage
│   │
│   ├── components/
│   │   ├── layout/             # Layout components (Header, Footer)
│   │   ├── providers/          # Global providers (AppProvider, ThemeProvider)
│   │   ├── shared/             # Reusable composite components
│   │   │   ├── confirm-dialog.tsx
│   │   │   ├── empty-state.tsx
│   │   │   ├── error-state.tsx
│   │   │   ├── page-loader.tsx
│   │   │   ├── section-heading.tsx
│   │   │   └── theme-toggle.tsx
│   │   └── ui/                 # Atomic shadcn/ui components
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── checkbox.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── radio-group.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── skeleton.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── textarea.tsx
│   │       └── tooltip.tsx
│   │
│   ├── config/                 # Application configuration & validated env
│   │   ├── env.ts              # Zod-validated environment variables
│   │   └── site.ts             # Site metadata and global links
│   │
│   ├── constants/              # Application-wide immutable constants
│   │   └── index.ts            # Pagination defaults, API cache tags
│   │
│   ├── features/               # Feature-based domain logic and modules
│   │   └── demo/               # Starter demo showcase module
│   │       ├── components/
│   │       └── schemas/
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── index.ts
│   │   ├── use-debounce.ts     # Value debouncing hook
│   │   ├── use-mounted.ts      # Hydration-safe client mounting hook
│   │   └── use-redux.ts        # Typed useAppDispatch & useAppSelector
│   │
│   ├── lib/                    # Foundation libraries
│   │   └── utils.ts            # cn() class utility (clsx + tailwind-merge)
│   │
│   ├── services/               # RTK Query API infrastructure
│   │   ├── base-api.ts         # Centralized baseApi definition
│   │   └── endpoints/          # Injected endpoints (e.g., sample-api.ts)
│   │
│   ├── store/                  # Redux Toolkit store setup
│   │   ├── index.ts            # Store configuration and root types
│   │   └── provider.tsx        # Client StoreProvider with ref caching
│   │
│   ├── types/                  # Global TypeScript type definitions
│   │   ├── api.types.ts        # ApiResponse, PaginatedResponse, ApiError
│   │   └── index.ts
│   │
│   └── utils/                  # Pure utility functions
│       ├── currency.ts         # Currency formatting with Intl.NumberFormat
│       ├── date.ts             # Date and relative time formatting
│       ├── debounce.ts         # Pure debounce function
│       ├── error.ts            # Safe error message extraction
│       ├── file.ts             # File size formatting (Bytes to GB)
│       ├── index.ts
│       └── string.ts           # String truncation, slugify, capitalization
│
├── .env.example                # Sample environment variables
├── .gitignore                  # Git ignore rules
├── .prettierrc                 # Prettier configuration
├── components.json             # shadcn/ui configuration
├── eslint.config.mjs           # Flat ESLint configuration
├── next.config.ts              # Next.js compiler settings
├── postcss.config.mjs          # PostCSS configuration for Tailwind v4
├── tsconfig.json               # TypeScript strict configuration
├── package.json                # Dependencies and build scripts
└── README.md                   # Complete template documentation
```

### Where to add new code:

- **New Pages**: Place under `src/app/<route-name>/page.tsx`.
- **Reusable UI Components**: Add to `src/components/ui/` (or via shadcn CLI).
- **Composite/Shared Components**: Add to `src/components/shared/`.
- **Feature Modules**: Group business logic in `src/features/<feature-name>/` containing `components/`, `schemas/`, and `hooks/`.
- **API Endpoints**: Inject into `src/services/endpoints/<feature>.ts`.
- **Shared Types**: Add to `src/types/`.
- **Helper Functions**: Add pure functions to `src/utils/`.

---

## 7. Configuration Guide

### Next.js Configuration (`next.config.ts`)

Configured in TypeScript with strict React mode enabled:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

### TypeScript Configuration (`tsconfig.json`)

Enforces strict type checks, JSON module resolution, and path aliasing:

```json
{
  "compilerOptions": {
    "strict": true,
    "noEmit": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Tailwind CSS v4 Configuration (`postcss.config.mjs` & `globals.css`)

Tailwind v4 utilizes the native `@tailwindcss/postcss` plugin. Theme variables and utility extensions are declared in `src/app/globals.css` with `@theme`.

### ESLint & Prettier

- `eslint.config.mjs`: Configured using the modern Flat Config format extending `next/core-web-vitals` and `next/typescript` while explicitly disallowing `any`.
- `.prettierrc`: Consistent 2-space indentation, double quotes, semicolon enforcement, and automated Tailwind class sorting.

---

## 8. UI Components Guide

### Using shadcn/ui

All shadcn/ui primitives are located in `src/components/ui/`. They are accessible, fully unstyled or themed via CSS variables, and render cleanly on both server and client.

### Adding New shadcn Components

To add a new official component, execute:

```bash
npx shadcn@latest add <component-name>
```

### Example: Using Buttons and Badges

```tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function ActionCard() {
  return (
    <div className="flex items-center gap-3">
      <Badge variant="secondary">New</Badge>
      <Button variant="default" size="sm" className="gap-2">
        Get Started <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
```

### Notifications with Sonner

Sonner is mounted in the `AppProvider`. Trigger toasts from any client component:

```tsx
"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function NotifyButton() {
  return <Button onClick={() => toast.success("Action saved successfully!")}>Save Changes</Button>;
}
```

---

## 9. Redux & RTK Query Guide

The Redux store is configured to avoid client re-initialization during navigations using React's `useRef` in `src/store/provider.tsx`.

### Injecting New Endpoints

To add API endpoints for a feature, use `baseApi.injectEndpoints`:

```typescript
// src/services/endpoints/post-api.ts
import { baseApi } from "@/services/base-api";
import type { ApiResponse } from "@/types";

export interface Post {
  id: string;
  title: string;
}

export const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<ApiResponse<Post[]>, void>({
      query: () => "/posts",
      providesTags: ["Sample"],
    }),
    createPost: builder.mutation<ApiResponse<Post>, { title: string }>({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Sample"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetPostsQuery, useCreatePostMutation } = postApi;
```

### Consuming in a Client Component

```tsx
"use client";

import { useGetPostsQuery } from "@/services/endpoints/post-api";
import { PageLoader } from "@/components/shared/page-loader";
import { ErrorState } from "@/components/shared/error-state";

export function PostList() {
  const { data, isLoading, isError, refetch } = useGetPostsQuery();

  if (isLoading) return <PageLoader message="Fetching posts..." />;
  if (isError) return <ErrorState message="Could not load posts" onRetry={refetch} />;

  return (
    <ul>
      {data?.data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

---

## 10. Form & Validation Guide

Forms are constructed using React Hook Form and Zod schemas to ensure type-safe inputs and robust validation.

### Creating a Validated Form

```tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const subscribeSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});

type SubscribeFormValues = z.infer<typeof subscribeSchema>;

export function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SubscribeFormValues>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmit = async (values: SubscribeFormValues) => {
    console.log("Subscribed:", values.email);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input id="email" {...register("email")} />
        {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Subscribe"}
      </Button>
    </form>
  );
}
```

---

## 11. Theme Guide

Themes are managed with `next-themes` and CSS variables:

- **Light Theme**: Default bright palette with soft contrast.
- **Dark Theme**: Charcoal/slate dark palette with high-contrast foreground.
- **System Preference**: Automatically detects `prefers-color-scheme`.

### Hydration Handling

The `ThemeToggle` component in `src/components/shared/theme-toggle.tsx` uses the custom `useMounted` hook to ensure icons and menus do not cause hydration mismatches between server-rendered HTML and client hydration.

---

## 12. Environment Variables

Environment variables are validated on startup using Zod in `src/config/env.ts`.

### Sample `.env.example`

```env
# Public URL for metadata and client redirects
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Base URL for RTK Query data fetching (Optional for local development)
NEXT_PUBLIC_API_URL=https://api.example.com
```

### Public vs Private Variables

- **Public Variables (`NEXT_PUBLIC_*`)**: Bundled into the client JavaScript build. Use only for public identifiers, base URLs, or client-accessible configuration.
- **Private Variables**: Stored on the server and never exposed to the client bundle. Suitable for database URLs, secret tokens, and API private keys.

---

## 13. Coding Standards

1. **TypeScript Strict Mode**: Never use `any`. Always create or derive explicit interfaces and types.
2. **Server Components First**: Keep page components and container layouts as Server Components. Only designate interactive leaves as `"use client"`.
3. **Clean Path Imports**: Always use the `@/*` alias for imports within `src/` (e.g., `@/components/ui/button`).
4. **CSS Design Tokens**: Never hardcode arbitrary hex colors in components. Utilize semantic classes like `bg-card`, `text-primary`, and `border-border`.
5. **No Hydration Discrepancies**: Use `useMounted` when rendering client-only UI or local storage state.

---

## 14. Available Scripts

The project includes standard scripts in `package.json`:

```bash
# Start Next.js development server
npm run dev

# Run TypeScript type check without emitting output
npm run type-check

# Run ESLint to inspect code quality
npm run lint

# Check code formatting with Prettier
npm run format:check

# Automatically fix formatting with Prettier
npm run format

# Create production build
npm run build

# Start production server
npm run start
```

---

## 15. Production Build

To ensure code quality and build stability before shipping:

```bash
# 1. Verify TypeScript types
npm run type-check

# 2. Check linting rules
npm run lint

# 3. Verify Prettier formatting
npm run format:check

# 4. Generate production build
npm run build
```

The output build artifacts will be generated in `/.next/` ready for deployment on Vercel, Node.js servers, Docker containers, or any modern hosting platform.

---

## 16. Troubleshooting

### Port 3000 is already in use

```bash
# Start on an alternate port
PORT=3001 npm run dev
```

### Missing environment variable warnings

Ensure you copied `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

### Clear Next.js build cache

If you experience caching discrepancies during development:

```bash
rm -rf .next
npm run dev
```

---

## 17. Reusable Dashboard Module

The project includes an optional, fully decoupled **Dashboard Module** located in `src/modules/dashboard/` and mapped to the App Router route group `src/app/(dashboard)/dashboard/`.

### 1. Dashboard Architecture

- **Complete Decoupling**: The dashboard is isolated inside `src/modules/dashboard/`. The Next.js route file `src/app/(dashboard)/dashboard/page.tsx` is lightweight and simply delegates rendering to the module.
- **Independent State**: Sidebar collapse and mobile drawer state are managed via `SidebarProvider` and `useSidebar()`, persisting user preferences in `localStorage`.
- **Reusable Foundation**: Fully reuses the Core Template's ThemeProvider, Radix primitives, Lucide icons, and formatting utilities with zero redundant packages.

### 2. Folder Structure

```text
src/
├── app/
│   └── (dashboard)/
│       └── dashboard/
│           ├── layout.tsx              # Thin App Router layout wrapping DashboardLayout
│           └── page.tsx                # Thin App Router page rendering DashboardOverview
│
└── modules/
    └── dashboard/
        ├── components/
        │   ├── breadcrumbs/            # Dynamic route-based breadcrumbs
        │   ├── dashboard-widgets/      # Stat cards, CSS bar charts, recent activity, tables
        │   ├── mobile-navigation/      # Slide-in mobile drawer (Sheet)
        │   ├── navbar/                 # Dashboard navbar, user profile menu, notifications
        │   ├── sidebar/                # Collapsible desktop sidebar, grouped nav items, tooltips
        │   ├── ui/                     # Page headers, content wrappers, sections, empty states
        │   └── dashboard-overview.tsx  # Generic overview demonstration component
        ├── config/
        │   ├── dashboard.config.ts     # Configurable app name, user info, default collapse state
        │   └── navigation.config.ts    # Centralized type-safe navigation menu configuration
        ├── data/
        │   └── mock-dashboard.data.ts  # Isolated mock metrics, chart data, and project rows
        ├── hooks/
        │   └── use-sidebar.tsx         # Sidebar collapse & mobile drawer context
        ├── layouts/
        │   └── dashboard-layout.tsx    # Master dashboard shell (sidebar + navbar + content)
        ├── types/
        │   └── dashboard.types.ts      # Strict interfaces for nav items, stats, and user profile
        └── index.ts                    # Clean barrel exports
```

### 3. Installation and Dependencies

The Dashboard Module uses the pre-installed Core Template packages:

- `lucide-react`: Icons for menu items, metrics, and navigation actions.
- `@radix-ui/react-dialog`: Powers both modal dialogs and the mobile drawer (`src/components/ui/sheet.tsx`).
- `@radix-ui/react-dropdown-menu`: Powers user profile actions and notification menus.
- `@radix-ui/react-tooltip`: Provides floating tooltips when the sidebar is collapsed.
- `sonner`: Toast notifications for user actions and exports.

No additional third-party charting or table libraries are required; charts and tables are implemented with responsive Tailwind CSS.

### 4. How to Enable the Module

The Dashboard Module is active by default at `/dashboard`. You can access it directly in your browser:

```bash
http://localhost:3000/dashboard
```

A direct navigation button is also integrated into the homepage header.

### 5. How to Configure the Sidebar

Sidebar settings are defined in `src/modules/dashboard/config/dashboard.config.ts`:

```typescript
export const dashboardConfig = {
  appName: "Next.js Core Starter",
  appDescription: "Modular Admin & Application Dashboard",
  defaultSidebarCollapsed: false, // Set to true to start collapsed
  user: {
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    role: "Senior Architect",
    avatarUrl: "",
  },
};
```

### 6. How to Add Navigation Items

Edit `src/modules/dashboard/config/navigation.config.ts`. Navigation items support icons, active highlighting, badges, and nested sub-menus:

```typescript
export const dashboardNavigation: NavGroup[] = [
  {
    title: "Analytics",
    items: [
      {
        label: "Performance",
        href: "/dashboard/performance",
        icon: BarChart3,
        badge: "Live",
        badgeVariant: "default",
      },
      {
        label: "Team",
        href: "/dashboard/team",
        icon: Users,
        children: [
          { label: "Members", href: "/dashboard/team/members" },
          { label: "Roles", href: "/dashboard/team/roles" },
        ],
      },
    ],
  },
];
```

### 7. How to Create New Dashboard Pages

To add a new dashboard page (e.g. `/dashboard/analytics`):

1. Create `src/app/(dashboard)/dashboard/analytics/page.tsx`:

```tsx
import { DashboardPageHeader, DashboardContent } from "@/modules/dashboard";

export default function AnalyticsPage() {
  return (
    <DashboardContent>
      <DashboardPageHeader
        title="Analytics Overview"
        description="Detailed system performance and metrics."
      />
      {/* Your page components here */}
    </DashboardContent>
  );
}
```

### 8. How to Use Dashboard Components

Import reusable dashboard primitives from `@/modules/dashboard`:

```tsx
import {
  DashboardStatCard,
  DashboardWidgetCard,
  DashboardPageHeader,
  DashboardEmptyState,
} from "@/modules/dashboard";
```

### 9. How to Customize the Layout

The dashboard shell is controlled by `DashboardLayout` in `src/modules/dashboard/layouts/dashboard-layout.tsx`. You can re-order navbar controls, adjust the sidebar width, or insert sub-headers directly within this layout.

### 10. Responsive Behavior

- **Desktop (>= 1024px)**: Fixed collapsible sidebar with icon-only mode and tooltips. Smooth width transition from `16rem` (`w-64`) to `4rem` (`w-16`).
- **Tablet & Mobile (< 1024px)**: Sidebar is hidden; a top navbar button triggers a slide-in drawer (`Sheet`) with an overlay that locks background scrolling and automatically closes upon navigation.
- **Tables and Charts**: Wrapped in horizontal overflow containers ensuring zero layout breakage on screens down to 320px.

### 11. How to Remove the Dashboard Module

If you want to strip the dashboard and return to the pure Core Template:

1. Delete `src/modules/dashboard/`.
2. Delete `src/app/(dashboard)/`.
3. In `src/components/layout/header.tsx` and `src/app/page.tsx`, remove links to `/dashboard`.
4. (Optional) Delete `src/components/ui/sheet.tsx` if not used elsewhere.

The Core Template will continue running without any broken dependencies or configuration changes.

---

## 18. Reusable Authentication Module

The project includes an optional, fully decoupled **Authentication Module** located in `src/modules/authentication/` and mapped to the App Router route group `src/app/(auth)/`. It operates independently or in seamless synergy with the Dashboard Module.

### 1. Authentication Architecture

- **Isolated Module Domain**: All authentication state, schemas, endpoints, and form components reside in `src/modules/authentication/`.
- **Thin App Router Routes**: Next.js route files under `src/app/(auth)/` are thin wrappers that render the module's components.
- **Centralized RTK Query Integration**: Extends the root `baseApi` with tag-based cache synchronization (`API_TAGS.USER`), automatic re-fetching, and shared error formatting.

### 2. Folder Structure

```text
src/
├── app/
│   └── (auth)/
│       ├── login/
│       │   └── page.tsx              # Sign In route
│       ├── register/
│       │   └── page.tsx              # Registration route
│       ├── forgot-password/
│       │   └── page.tsx              # Password recovery route
│       ├── reset-password/
│       │   └── page.tsx              # Password reset route (reads ?token=...)
│       └── layout.tsx                # Auth route group layout
│
└── modules/
    └── authentication/
        ├── components/
        │   ├── auth-layout.tsx       # Centered card layout with logo & theme toggle
        │   ├── login-form.tsx        # Email, password toggle, remember me, loading state
        │   ├── register-form.tsx     # First/Last name, email, password strength check
        │   ├── forgot-password-form.tsx # Non-enumerating password reset request
        │   ├── reset-password-form.tsx  # Token verification & password update form
        │   └── protected-route.tsx   # Client route protection wrapper
        ├── config/
        │   └── auth.config.ts        # Configurable routes, branding, and feature flags
        ├── hooks/
        │   └── use-auth.ts           # Centralized auth state (user, isAuthenticated, login, logout)
        ├── schemas/
        │   └── auth.schema.ts        # Zod validation schemas with password matching
        ├── services/
        │   └── auth.api.ts           # RTK Query endpoints (/auth/login, /auth/register, /auth/me, etc.)
        ├── types/
        │   └── auth.types.ts         # User models, payloads, and response interfaces
        └── index.ts                  # Barrel exports
```

### 3. Supported Authentication Flows

- **Sign In (`/login`)**: Email and password validation, password reveal toggle, optional remember-me checkbox, error toast notifications, and configurable post-login redirection.
- **Sign Up (`/register`)**: First/Last name, email validation, password complexity check, password matching refinement, and direct sign-in redirection.
- **Forgot Password (`/forgot-password`)**: Email submission with a generic, non-enumerating confirmation to prevent account enumeration attacks.
- **Reset Password (`/reset-password`)**: Reads recovery token from URL query string (`?token=...`), validates new password confirmation, and updates account credentials.
- **Sign Out**: Calls backend logout endpoint, clears RTK Query user cache, and redirects to the configured public route.

### 4. API Endpoint Contract & Expected Types

The endpoints are injected into `baseApi` in `src/modules/authentication/services/auth.api.ts`:

| Action              | Method | Path                    | Request Body                          | Response Body                           |
| :------------------ | :----- | :---------------------- | :------------------------------------ | :-------------------------------------- |
| **Get Session**     | `GET`  | `/auth/me`              | None (reads cookie)                   | `{ user: AuthUser }`                    |
| **Sign In**         | `POST` | `/auth/login`           | `LoginPayload`                        | `{ user: AuthUser, message?: string }`  |
| **Sign Up**         | `POST` | `/auth/register`        | `RegisterPayload`                     | `{ user: AuthUser, message?: string }`  |
| **Sign Out**        | `POST` | `/auth/logout`          | None                                  | `{ success: boolean, message: string }` |
| **Forgot Password** | `POST` | `/auth/forgot-password` | `{ email: string }`                   | `{ success: boolean, message: string }` |
| **Reset Password**  | `POST` | `/auth/reset-password`  | `{ token: string, password: string }` | `{ success: boolean, message: string }` |

### 5. Backend Integration Instructions

The starter is unopinionated regarding your backend technology (Node/Express, NestJS, Go, FastAPI, Django, Ruby, Laravel). To connect your real backend:

1. Set your backend URL in `.env.local`:
   ```env
   NEXT_PUBLIC_API_URL=https://api.yourdomain.com
   ```
2. Ensure your backend returns the expected user payload schema (`id`, `email`, `firstName`, `lastName`, `role`).
3. If endpoint paths differ, adjust the URL paths in `src/modules/authentication/services/auth.api.ts`.

### 6. Session and Cookie Security

- **No LocalStorage**: Tokens are **never** stored in `localStorage`, `sessionStorage`, or accessible JavaScript objects.
- **HttpOnly Cookies**: Designed for server-managed sessions with `HttpOnly`, `Secure`, and `SameSite=Lax` (or `Strict`) cookies.
- **Credentials Handling**: The base query is pre-configured with `credentials: "include"`, ensuring session cookies are transmitted automatically on all cross-origin requests.

### 7. Authentication State Management (`useAuth`)

Consume authentication state in any Client Component:

```tsx
"use client";

import { useAuth } from "@/modules/authentication";

export function ProfileHeader() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();

  if (isLoading) return <p>Loading session...</p>;
  if (!isAuthenticated) return <p>Guest User</p>;

  return (
    <div>
      <p>Hello, {user?.firstName}!</p>
      <button onClick={() => logout()}>Sign Out</button>
    </div>
  );
}
```

### 8. Route Protection

Use the `ProtectedRoute` component to protect client layouts or pages:

```tsx
"use client";

import { ProtectedRoute } from "@/modules/authentication";

export default function ProtectedDashboardPage() {
  return (
    <ProtectedRoute>
      <div>Confidential Content for Authenticated Users</div>
    </ProtectedRoute>
  );
}
```

Unauthenticated visitors will be redirected to `/login?from=<current-path>`.

### 9. How to Configure Redirect Paths & Feature Flags

Customize `src/modules/authentication/config/auth.config.ts`:

```typescript
export const authConfig = {
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
    enableRegistration: true, // Set to false to hide public sign-up
    enableRememberMe: true, // Toggle remember me checkbox
    enablePasswordToggle: true, // Toggle eye icon reveal password
    minPasswordLength: 8, // Minimum password complexity requirement
  },
  branding: {
    title: "Your App Name",
    description: "Welcome to your platform",
    showLogo: true,
  },
};
```

### 10. Dashboard Integration

If the Dashboard Module is installed, the `UserNav` component in `src/modules/dashboard/components/navbar/user-nav.tsx` automatically detects `useAuth()`:

- Renders the real authenticated user's name, email, and role.
- Generates dynamic avatar initials based on the user's name.
- Connects the "Log out" menu action to `useAuth().logout()`.

### 11. How to Remove the Authentication Module

To remove the authentication module:

1. Delete `src/modules/authentication/`.
2. Delete `src/app/(auth)/`.
3. In `src/components/layout/header.tsx`, remove the Sign In link.
4. In `src/modules/dashboard/components/navbar/user-nav.tsx`, revert the `useAuth()` import to read static config.

---

## 19. Future Extension

This repository provides the **Core Starter Template**, an optional **Dashboard Module**, and an optional **Authentication Module**. Advanced business-specific features:

- Multi-factor Authentication (MFA / 2FA via SMS or TOTP)
- OAuth social logins (Google, GitHub, Apple)
- Production Database ORMs (Prisma, Drizzle)
- Multi-language Internationalization (i18n)

can be integrated on top of this foundation.

---

## 20. License

MIT License. Feel free to use this template for personal, open-source, or commercial projects.
