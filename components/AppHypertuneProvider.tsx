import { HypertuneProvider } from "../generated/hypertune.react";

export default function AppHypertuneProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  console.log(
    "process.env.EXPO_PUBLIC_HYPERTUNE_BRANCH_NAME",
    process.env.EXPO_PUBLIC_HYPERTUNE_BRANCH_NAME,
  );
  return (
    <HypertuneProvider
      createSourceOptions={{
        token: process.env.EXPO_PUBLIC_HYPERTUNE_TOKEN!,
        branchName: process.env.EXPO_PUBLIC_HYPERTUNE_BRANCH_NAME,
        initDataRefreshIntervalMs: 1000,
      }}
      rootArgs={{
        context: {
          environment:
            process.env.NODE_ENV === "development"
              ? "development"
              : "production",
          user: {
            id: "1",
            name: "test user",
            email: "hi@test.com",
            country: "UnitedKingdom",
          },
          organization: { id: "1", name: "test org", plan: "free" },
        },
      }}
    >
      {children}
    </HypertuneProvider>
  );
}
