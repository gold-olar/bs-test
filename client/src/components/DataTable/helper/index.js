import { notifyUser } from "../../../util/helper-functions";
import { deleteATask, editATask } from "../../../util/operations/tasks";
import { deleteAUser } from "../../../util/operations/users";

export const remove = async (data, setLoading, tableType, removeData) => {
  if (window.confirm("Are you sure ?")) {
    setLoading(true);
    const response =
      tableType === "users" ? await deleteAUser(data) : await deleteATask(data);
    response && setLoading(false);
    response && notifyUser(response);
    response.status && removeData(data);
    return true;
  }

  return false;
};

export const markTask = async (taskData, setLoading, edit) => {
  if (window.confirm("Are you sure ?")) {
    setLoading(true);
    const response = await editATask({
      _id: taskData._id,
      state: taskData.state === "done" ? "todo" : "done",
    });
    if (response && response.status) {
      edit(response.data);
    }
    response && setLoading(false);
    response && notifyUser(response);
    return true;
  }
  return false;
};
