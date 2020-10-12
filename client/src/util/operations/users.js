import { apiRequest } from "../apiRequest";

const createAUser = (userData) => {
  return apiRequest("/users/create", "POST", userData);
};

const editAUser = (userData) => {
  return apiRequest(`/users/${userData._id}`, "PATCH", userData);
};

const deleteAUser = (userData) => {
  return apiRequest(`/users/${userData._id}`, "DELETE");
};

const fetchUsers = () => {
  return apiRequest("/users/all", "GET");
};

export { createAUser, editAUser, fetchUsers, deleteAUser };
