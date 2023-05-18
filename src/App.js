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
import React, { lazy, Suspense, useState, Provider } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
//importing package,component and hooks from reatc-router-dom
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import { About } from "./components/About";
import Shimmer from "./components/Shimmer";
import UserContext from "./context/userContext";
// LAzy-Laoding the Instamart component
const Instmart = lazy(() => import("./components/Instmart"));

//creating root
const root = ReactDOM.createRoot(document.getElementById("root"));

// basic layout of the app
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Tarun Kashyap",
    email: "tkresonance@outlook.com",
  });

  return (
    <>
      <UserContext.Provider value={{ user: user }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
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
      {
        path: "instamart",
        element: (
          <Suspense fallback=<Shimmer />>
            <Instmart />
          </Suspense>
        ),
      },
    ],
  },
]);
// console.log(appRouter);

// render in the root
root.render(<RouterProvider router={appRouter} />);
