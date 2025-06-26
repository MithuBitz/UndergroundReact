import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useNotification } from "../context/NotificationContext";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  // Use the context
  const { count } = useNotification();
  return (
    <React.Fragment>
      <div>Hello "__root"!</div>
      <h3>The value of count is {count}</h3>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about-page" className="[&.active]:font-bold">
          About
        </Link>{" "}
        <Link to="//Products" className="[&.active]:font-bold">
          Products
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
