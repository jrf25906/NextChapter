// This file helps Builder.io discover all your components
export { BuilderContent } from "../components/common/BuilderContent";
export { CalmingLoadingIndicator } from "../components/common/CalmingLoadingIndicator";
export { EmpathyErrorState } from "../components/common/EmpathyErrorState";
export { ErrorBoundary } from "../components/common/ErrorBoundary";
export { default as Button } from "../components/common/Button";

// Feature components
export { TaskCard } from "../components/feature/bounce-plan/TaskCard";

// App components
export { NotificationSetup } from "../components/app/NotificationSetup";

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
    import("../components/feature/bounce-plan/TaskCard").then(
      (m) => m.TaskCard,
    ),
};
