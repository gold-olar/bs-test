import { notifyUser } from "../../../../util/helper-functions";
import { createAUser, editAUser } from "../../../../util/operations/users";

export const handleUsers = async (
  formData,
  edit,
  editData,
  setLoading,
  setShowModal,
  addToState,
  editUserFromState
) => {
  setLoading(true);
  const userData = {
    ...editData,
    ...formData,
  };
  const response = edit
    ? await editAUser(userData)
    : await createAUser(userData);

  response && setLoading(false);
  response && notifyUser(response);

  if (response && response.status) {
    edit ? editUserFromState(response.data) : addToState(response.data);
    return setShowModal({
      show: false,
    });
  }
};
