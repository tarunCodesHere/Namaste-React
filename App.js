const heading1 = React.createElement("h1", {}, "Heading 1");
const heading2 = React.createElement("h2", {}, "Heading 2");
const root = ReactDOM.createRoot(document.getElementById("root"));
//  passing the react element into root

const container = React.createElement("div", { id: "conatiner" }, [
  heading1,
  heading2,
]);
root.render(container);

console.log(heading1);
