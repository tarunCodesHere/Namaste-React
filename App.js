/**
 *created a server for you
 *HMR-hot module replacement
 * file watching algorithm- C++
 *BUNDLING
 *MINIFICATION
 *REMOVING CONSOLE  LOG
 *super fast build algorithm
 *image optimization
 *caching while development
 *compression
 *compatible with older version of browsers
 * gives HTTPS on development
 * manages port number
 * uses consistent hashing algorithm
 * Zero configuration bundler
 */
import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1 from parcel"
);
const heading2 = React.createElement("h2", {}, "Heading 2");
const root = ReactDOM.createRoot(document.getElementById("root"));
//  passing the react element into root

const container = React.createElement(
  "div",
  { id: "conatiner", hellow: "hello world" },
  [heading1, heading2]
);
root.render(container);

console.log(heading1);

// class 2, 23rd january
const khela = React.createElement("", {
  id: "shambhu",
  hellow: "hello shmabhu",
});
console.log(khela);
