import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Error from "./Components/Error/Error";

const route = createBrowserRouter([
  {
    path: "/Framework-Page",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/Framework-Page/about", element: <About /> },
      { path: "/Framework-Page/portfolio", element: <Portfolio /> },
      { path: "/Framework-Page/contact", element: <Contact /> },
    ],
  },
  { path: "*", element: <Error /> },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={route} basename="/Framework-Page" />
    </>
  );
}
