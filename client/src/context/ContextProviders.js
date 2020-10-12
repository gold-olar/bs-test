import React from "react";
import { Provider as UsersProvider } from "./usersContext";
import { Provider as TasksProvider } from "./tasksContext";

const ContextProvider = ({ children }) => {
  return (
    <UsersProvider>
      <TasksProvider>{children}</TasksProvider>
    </UsersProvider>
  );
};

export default ContextProvider;
