// This file helps Builder.io discover all your components
export { BuilderContent } from "../components/common/BuilderContent";
export { CalmingLoadingIndicator } from "../components/common/CalmingLoadingIndicator";
export { EmpathyErrorState } from "../components/common/EmpathyErrorState";
export { ErrorBoundary } from "../components/common/ErrorBoundary";
export { default as Button } from "../components/common/Button";

// Feature components
export { TaskCard } from "../components/features/bounce-plan/TaskCard";
export { MoodTracker } from "../components/features/mood/MoodTracker";
export { JobCard } from "../components/features/tracker/JobCard";
export { BudgetSummary } from "../components/features/budget/BudgetSummary";

// App components
export { NotificationBadge } from "../components/app/NotificationBadge";
export { BiometricPrompt } from "../components/app/BiometricPrompt";

// Export all components in a map for Builder.io
export const componentMap = {
  // Common
  BuilderContent: () =>
    import("../components/common/BuilderContent").then((m) => m.BuilderContent),
  CalmingLoadingIndicator: () =>
    import("../components/common/CalmingLoadingIndicator").then(
      (m) => m.CalmingLoadingIndicator,
    ),
  EmpathyErrorState: () =>
    import("../components/common/EmpathyErrorState").then(
      (m) => m.EmpathyErrorState,
    ),
  Button: () => import("../components/common/Button").then((m) => m.default),

  // Features
  TaskCard: () =>
    import("../components/features/bounce-plan/TaskCard").then(
      (m) => m.TaskCard,
    ),
  MoodTracker: () =>
    import("../components/features/mood/MoodTracker").then(
      (m) => m.MoodTracker,
    ),
  JobCard: () =>
    import("../components/features/tracker/JobCard").then((m) => m.JobCard),
  BudgetSummary: () =>
    import("../components/features/budget/BudgetSummary").then(
      (m) => m.BudgetSummary,
    ),
};
