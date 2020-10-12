import createDataContext from "./createContext";
import { useMemo } from "react";
import { notifyUser } from "../util/helper-functions";
import { useData } from "../util/useData";
import { fetchUsers } from "../util/operations/users";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "EDIT_A_USER":
      return {
        ...state,
        users: [
          ...state.users.filter((user) => user._id !== action.payload._id),
          action.payload,
        ],
      };
    case "FETCH_USERS_SUCCESFULLY":
      return action.payload;
    case "REMOVE_USER":
      return {
        ...state,
        users: [
          ...state.users.filter((user) => user._id !== action.payload._id),
        ],
      };
    default:
      return state;
  }
};

const addNewUser = (dispatch) => (userData) => {
  dispatch({ type: "ADD_NEW_USER", payload: userData.user });
};
const editAUser = (dispatch) => (userData) => {
  dispatch({ type: "EDIT_A_USER", payload: userData.user });
};

const removeUserFromUsersList = (dispatch) => (userData) => {
  dispatch({ type: "REMOVE_USER", payload: userData });
};

const fetchAllUsers = (dispatch) => async () => {
  const { status, data, message } = useData(fetchUsers);
  useMemo(() => {
    !status && notifyUser({ status, message });

    data && dispatch({ type: "FETCH_USERS_SUCCESFULLY", payload: data });
  }, [data, status]);
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    editAUser,
    addNewUser,
    fetchAllUsers,
    removeUserFromUsersList,
  },
  {
    users: [],
  }
);
