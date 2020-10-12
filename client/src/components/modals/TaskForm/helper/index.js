import { notifyUser } from "../../../../util/helper-functions";
import { createATask, editATask } from "../../../../util/operations/tasks";

export const handleTasks = async (
  formData,
  edit,
  editData,
  setLoading,
  setShowModal,
  addToState,
  editTaskFromState
) => {
  setLoading(true);
  const taskData = {
    ...editData,
    ...formData,
  };
  const response = edit
    ? await editATask(taskData)
    : await createATask(taskData);

  response && setLoading(false);
  response && notifyUser(response);

  if (response && response.status) {
    edit ? editTaskFromState(response.data) : addToState(response.data);
    return setShowModal({
      show: false,
    });
  }
};
