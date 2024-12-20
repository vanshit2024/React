const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "CHILD KA BHI CHILD"),
    React.createElement("h2", {}, "H2 TAG "),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "CHILD KA BHI CHILD"),
    React.createElement("h2", {}, "H2 TAG "),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
