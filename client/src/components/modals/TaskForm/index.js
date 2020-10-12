import React, { useContext, useState } from "react";
import { FormGroup, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { handleTasks } from "./helper";
import { Context as TasksContext } from "../../../context/tasksContext";

const TaskForm = ({ setShowModal, data }) => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const { edit = false, editData = {}, user } = data;

  const { addNewTask, editATask } = useContext(TasksContext);

  const submit = (formData) => {
    return handleTasks(
      { ...formData, userId: user },
      edit,
      editData,
      setLoading,
      setShowModal,
      addNewTask,
      editATask
    );
  };

  return (
    <>
      <h5 className="text-center mb-3"> {edit ? "Edit Task" : "Add Task "}</h5>

      <form onSubmit={handleSubmit(submit)}>
        <FormGroup>
          <label
            className={errors.description ? "error-label" : "label"}
            htmlFor="Description"
          >
            {errors.message ? `Description is required` : "Description"}
          </label>
          <textarea
            ref={register({ required: true })}
            rows="10"
            className="form-control"
            name="description"
            defaultValue={editData?.description}
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
          {!loading && <span> {edit ? "Edit Task" : "Add Task "}</span>}

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

export default TaskForm;
