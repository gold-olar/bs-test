import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DataTable from "../../components/DataTable";
import PageHeader from "../../components/PageHeader";
import { Context as UsersContext } from "../../context/usersContext";

const UsersPage = ({ setShowModal }) => {
  const {
    state: { users },
    fetchAllUsers,
    editAUser,
    removeUserFromUsersList,
  } = useContext(UsersContext);

  fetchAllUsers();

  return (
    <Container>
      <Row className="p-5">
        <PageHeader setShowModal={setShowModal} pageTitle="users" />
        <Col>
          <DataTable
            data={users}
            tableType="users"
            setShowModal={setShowModal}
            editData={editAUser}
            removeData={removeUserFromUsersList}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default UsersPage;
