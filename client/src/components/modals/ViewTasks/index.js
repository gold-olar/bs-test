import React from "react";
import "./styles.scss";

import { Badge, Button } from "react-bootstrap";

const ViewTask = ({ setShowModal, data }) => {
  const { task } = data;
  return (
    <section className="task-details-section">
      <h5 className="text-center mb-3">Task Details</h5>
      <div className="text-center">
        <Badge variant={task.state === "done" ? "success" : "dark"}>
          {" "}
          {task.state === "done" ? "Done" : "To do"}{" "}
        </Badge>
      </div>
      <div className="task__body">
        <p className="task__description">{task.description} </p>
      </div>
    </section>
  );
};

export default ViewTask;
