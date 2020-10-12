import { apiRequest } from "../apiRequest";

const createATask = (taskData) => {
  return apiRequest("/tasks/create", "POST", taskData);
};

const editATask = (taskData) => {
  return apiRequest(`/tasks/${taskData._id}`, "PATCH", taskData);
};

const deleteATask = (taskData) => {
  return apiRequest(`/tasks/${taskData._id}`, "DELETE");
};

const fetchTasks = () => {
  return apiRequest("/tasks/all", "GET");
};

export { createATask, editATask, fetchTasks, deleteATask };
