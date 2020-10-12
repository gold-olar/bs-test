import React, { useContext, useState } from "react";
import { FormGroup, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { handleTasks } from "./helper";
import { Context as TasksContext } from "../../../context/tasksContext";

const TaskForm = ({ setShowModal, data }) => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const { editTask = false, taskData = {} } = data;

  const { addNewTask, editATask } = useContext(TasksContext);

  const submit = (formData) => {
    return handleTasks(
      { ...formData },
      editTask,
      taskData,
      setLoading,
      setShowModal,
      addNewTask,
      editATask
    );
  };

  return (
    <>
      <h5 className="text-center mb-3">
        {" "}
        {editTask ? "Edit Task" : "Add Task "}
      </h5>

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
            defaultValue={taskData?.description}
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
          {!loading && <span> {editTask ? "Edit Task" : "Add Task "}</span>}

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
