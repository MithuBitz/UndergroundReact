import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/app")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      App Layout
      <h1>Routes</h1>
      <li>
        <Link to="/app/dashboard">/app/dashboard</Link>
      </li>
      <Outlet />
    </div>
  );
}
