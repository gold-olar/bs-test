import React from "react";
import { USER_MODAL, TASK_MODAL } from "../../util/constants";
import { Col } from "react-bootstrap";

const NoDataAvailable = ({ setShowModal, tableType, user }) => {
  return (
    <>
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
    </>
  );
};

export default NoDataAvailable;
