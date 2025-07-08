import React from "react";

export default function App({ criketers }) {
  return React.createElement("div", { style: { padding: "2rem" } }, [
    React.createElement("h1", {}, "Favorite Criketers"),
    React.createElement(
      "ul",
      {},
      criketers.map((cricketer) =>
        React.createElement("li", { key: cricketer.id }, [
          React.createElement("h3", {}, cricketer.name),
          React.createElement("h4", {}, cricketer.country),
        ])
      )
    ),
  ]);
}
