import React, { useState } from "react";
import { Col, Spinner } from "react-bootstrap";
import completedIcon from "../../assets/icons/completed.png";
import pendingIcon from "../../assets/icons/pending.png";
import "./styles.scss";
import editIcon from "../../assets/icons/edit.png";
import deleteIcon from "../../assets/icons/delete.png";
import { USER_MODAL, TASK_MODAL } from "../../util/constants";

const DataRow = ({
  data,
  tableType,
  setShowModal,
  handleRemoveData,
  handleMarkingTasks,
  handleRowClick,
}) => {
  const { state, description, name } = data;
  const [loading, setLoading] = useState(false);

  return (
    <Col md={12}>
      <div className="data">
        {tableType === "tasks" && (
          <span onClick={() => handleMarkingTasks(data, setLoading)}>
            <img
              className="task__status-icon"
              src={state === "done" ? completedIcon : pendingIcon}
              alt="Task Status Icon"
            />
            <span className="task-cta">
              {" "}
              {state === "done" ? "Set as Pending" : "Set as completed"}{" "}
            </span>
          </span>
        )}
        <div onClick={() => handleRowClick(data, tableType)}>
          {loading ? (
            <Spinner
              animation="border"
              size="sm"
              role="status"
              aria-hidden={true}
              className="align-baseline"
              variant="primary"
            >
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <>
              {tableType === "users" ? (
                <p> {name} </p>
              ) : (
                <p>
                  {" "}
                  {description.length > 60
                    ? `${description.slice(0, 59)} ...`
                    : description}{" "}
                </p>
              )}
            </>
          )}
        </div>
        <span>
          <img
            onClick={() =>
              setShowModal({
                modalId: tableType === "users" ? USER_MODAL : TASK_MODAL,
                data: {
                  editData: data,
                  edit: true,
                },
                show: true,
              })
            }
            src={editIcon}
            className="action-icon"
            alt="Edit Icon"
          />

          <img
            onClick={() => handleRemoveData(data, setLoading)}
            src={deleteIcon}
            className="action-icon"
            alt="Delete Icon"
          />
        </span>
      </div>
    </Col>
  );
};

export default DataRow;
