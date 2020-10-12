import React from "react";
import "./styles.scss";
import DataRow from "../DataRow";
import { Col, Row } from "react-bootstrap";
import { TASK_MODAL, USER_MODAL, VIEW_TASK } from "../../util/constants";
import { useHistory } from "react-router-dom";
import { remove, markTask } from "./helper";

const DataTable = ({
  setShowModal,
  data,
  tableType,
  user,
  editData,
  removeData,
}) => {
  const history = useHistory();

  const handleRowClick = (data, tableType) => {
    if (tableType === "users") {
      return history.push(`/users/${data._id}`);
    }
    return setShowModal({
      modalId: VIEW_TASK,
      show: true,
      data: {
        task: data,
      },
    });
  };
  const handleRemoveData = (data, setLoading) => {
    return remove(data, setLoading, tableType, removeData);
  };
  const handleMarkingTasks = (data, setLoading) => {
    return markTask(data, setLoading, editData);
  };

  return (
    <section className="data-table-section ">
      <Row>
        {data && data.length === 0 ? (
          <Col className="text-center p-5">
            <span
              onClick={() => {
                return setShowModal({
                  show: true,
                  modalId: tableType === "users" ? USER_MODAL : TASK_MODAL,
                  data: {
                    user,
                  },
                });
              }}
              className="data-table-section__get-started"
            >
              No {tableType} yet ! Add {tableType} here !
            </span>
          </Col>
        ) : (
          <>
            {data.map((data) => (
              <DataRow
                tableType={tableType}
                setShowModal={setShowModal}
                data={data}
                key={data._id}
                handleRowClick={handleRowClick}
                handleMarkingTasks={handleMarkingTasks}
                handleRemoveData={handleRemoveData}
              />
            ))}
          </>
        )}
      </Row>
    </section>
  );
};

export default DataTable;
