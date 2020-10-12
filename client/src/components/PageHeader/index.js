import React from "react";
import { Button, Col } from "react-bootstrap";
import { USER_MODAL, TASK_MODAL } from "../../util/constants";
import "./styles.scss";

const PageHeader = ({ pageTitle, setShowModal, user }) => {
  return (
    <>
      <Col className="page-header" md="12">
        <h6> {pageTitle}</h6>
        <Button
          onClick={() =>
            setShowModal({
              show: true,
              modalId: pageTitle === "users" ? USER_MODAL : TASK_MODAL,
              data: {
                user,
              },
            })
          }
          className="btn-sm"
          variant="dark"
        >
          + Add
        </Button>
      </Col>
    </>
  );
};

export default PageHeader;
