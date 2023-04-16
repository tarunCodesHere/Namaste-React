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
import { List } from "dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/**
 * Header
 *    -Logo(Title)
 *    -nav-items(right side)
 *    -CART
 * Body
 *   -search Bar
 *   -Restaurant list
 *   -Restaurant card(many)
 *      -image
 *      -name
 *      -rating
 *      -cuisines
 * Footer
 *     -links
 */

//creating root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Componenet
/**
 * 1.Functional componenet-mostly yahi use karenge
 * 2. class based component - just 1 class
 */

// data of restro ends here

//body

const AppLayout = () => {
  return (
    <React.Fragment>
      {/**
       * Header
       *    -Logo
       *    -nav-items(right side)
       *    -CART
       * Body
       *   -search Bar
       *   -Restaurant list
       *      -image
       *      -name
       *      -rating
       *      -cuisines
       * Footer
       *     -links
       */}

      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};
// khela

// render in the root
root.render(<AppLayout />);
