import React, { lazy } from "react";
import { TASK_MODAL, USER_MODAL, VIEW_TASK } from "../../../util/constants";

const TaskForm = lazy(() => import("../../../components/modals/TaskForm"));
const UserForm = lazy(() => import("../../../components/modals/UsersForm"));
const ViewTask = lazy(() => import("../../../components/modals/ViewTasks"));

const allModals = {
  [TASK_MODAL]: (setShowModal, data) => (
    <TaskForm setShowModal={setShowModal} data={data} />
  ),
  [USER_MODAL]: (setShowModal, data) => (
    <UserForm setShowModal={setShowModal} data={data} />
  ),
  [VIEW_TASK]: (setShowModal, data) => (
    <ViewTask setShowModal={setShowModal} data={data} />
  ),
};

export default allModals;
