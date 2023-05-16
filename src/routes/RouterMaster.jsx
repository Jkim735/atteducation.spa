import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { useContext, useEffect, useState } from "react";
import Register from "../pages/Register";
import Test from "../pages/Test";
const RouterMaster = () => {
  const createRouter = [
    {
      path: "/",
      index: "",
    },
    {
      path: "Register",
      index: <Register />,
    },
    {
      path: "Test",
      index: <Test />,
    },
  ];

  return (
    <Routes>
      {createRouter.map((route, index) => (
        <Route key={index} path={route.path}>
          {route.index ? (
            <Route index element={route.index} />
          ) : (
            <Route exac path="/" element={<Home />} />
          )}
        </Route>
      ))}
    </Routes>
  );
};

export default RouterMaster;
