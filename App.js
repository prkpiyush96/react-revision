const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1" }, "I am an h1 tag"),
    React.createElement("h2", { key: "h2" }, "I am an h2 tag"),
  ])
);

// const heading = React.createElement("h1", { id: "heading" }, "Hello World!");

console.log(parent, "heading");

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root, "root");

root.render(parent);
