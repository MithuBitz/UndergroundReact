import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about-page")({
  component: RouteComponent,
  defaultPreload: "Intent",
});

function RouteComponent() {
  return <div>Hello "/about-page"!</div>;
}
