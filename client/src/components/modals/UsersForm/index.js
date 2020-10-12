import React, { useState, useContext } from "react";
import { FormGroup, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { handleUsers } from "./helper";
import { Context as UsersContext } from "../../../context/usersContext";

const UsersForm = ({ setShowModal, data }) => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const { edit = false, editData = {} } = data;

  const { editAUser, addNewUser } = useContext(UsersContext);

  const submit = (formData) => {
    return handleUsers(
      { ...formData },
      edit,
      editData,
      setLoading,
      setShowModal,
      addNewUser,
      editAUser
    );
  };
  return (
    <>
      <h5 className="text-center mb-3"> {edit ? "Edit User" : "Add User"}</h5>
      <form onSubmit={handleSubmit(submit)}>
        <FormGroup>
          <label
            className={errors.name ? "error-label" : "label"}
            htmlFor="Name "
          >
            Name
          </label>
          <input
            ref={register({ required: true })}
            className="form-control"
            type="text"
            name="name"
            defaultValue={editData?.name}
          />
        </FormGroup>

        <Button
          variant="dark"
          block={true}
          size={"md"}
          type="submit"
          disabled={loading}
          className="mt-4"
        >
          {!loading && <span> {edit ? "Edit User" : "Add User "}</span>}

          {loading && (
            <Spinner
              animation="border"
              size="sm"
              role="status"
              aria-hidden={true}
              className="align-baseline"
            >
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
        </Button>
      </form>
    </>
  );
};

export default UsersForm;
