import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const FavCricketer = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "My Favorite Cricketers"),
    React.createElement("h2", {}, "Sachin Tendulkar"),
    React.createElement("h2", {}, "Virendra Sehwag"),
    React.createElement("h2", {}, "Rahul Dravid"),
  ]);
};

const MyFavCricketer = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.country),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "My List of Favourite Cricketers"),
    React.createElement(FavCricketer),
  ]);
};

const App1 = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Great Cricketers of the World"),
    React.createElement(MyFavCricketer, {
      name: "Sachin Tendulkar",
      country: "India",
    }),
    React.createElement(MyFavCricketer, {
      name: "Virendra Sehwag",
      country: "India",
    }),
    React.createElement(MyFavCricketer, {
      name: "Jonty Rodes",
      country: "South Africa",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
// root.render(React.createElement(App));
root.render(React.createElement(App1));
