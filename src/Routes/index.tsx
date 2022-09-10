import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { Login } from "../components/Login";
import { Registration } from "../components/Registration";
import ProtectedRoutes from "./ProtectedRoutes";

const RoutesPage = ({}) => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
  );
};

export default RoutesPage;
