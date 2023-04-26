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
import RestaurantMenu from "./components/RestaurantDetails";
import { List } from "dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { About } from "./components/About";
import ProfileClassComponent from "./components/ProfileClass"; //importing package,component and hooks from reatc-router-dom
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";

//creating root
const root = ReactDOM.createRoot(document.getElementById("root"));

// basic layout of the app
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};
// creating routes and configuration for createBrowserRouter
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
  },
]);
// console.log(appRouter);

// render in the root
root.render(<RouterProvider router={appRouter} />);
