import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CreateTask from "./pages/CreateTask";
import Tasks from "./pages/Tasks";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateTask />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
