import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Product/$pid")({
  component: RouteComponent,
});

function RouteComponent() {
  //Grab the pid from the URL
  const { pid } = Route.useParams();
  return (
    <div>
      Hello "/Products/$pid"!
      <h3>This is my product id: {pid}</h3>
    </div>
  );
}
