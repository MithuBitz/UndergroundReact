import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useNotification } from "../context/NotificationContext";
import { useCartStore } from "../store/cartStore";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  // Use the context
  const { count } = useNotification();
  //Zustand store
  const cartCount = useCartStore((state) => state.cart.length);
  // const addToCart = useCartStore((state) => state.addToCart);
  return (
    <React.Fragment>
      <div>Hello "__root"!</div>
      <h3>The value of count is {count}</h3>
      <h3>The value of cartCount coming from zustand store is {cartCount}</h3>
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
