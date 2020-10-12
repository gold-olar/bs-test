import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DataTable from "../../components/DataTable";
import PageHeader from "../../components/PageHeader";
import { Context as TaskContext } from "../../context/tasksContext";
import { filterArrayByParam } from "../../util/helper-functions";

const TasksPage = ({
  setShowModal,
  match: {
    params: { userId },
  },
}) => {
  const [usersTasks, setUsersTasks] = useState([]);
  const {
    state: { tasks },
    fetchAllTasks,
    editATask,
    removeTaskFromTaskList,
  } = useContext(TaskContext);

  fetchAllTasks();

  useEffect(() => {
    setUsersTasks(filterArrayByParam(tasks, "user_id", userId));
  }, [userId, tasks]);

  return (
    <Container>
      <Row className="p-5">
        <PageHeader
          setShowModal={setShowModal}
          pageTitle="tasks"
          user={userId}
        />
        <Col>
          <DataTable
            data={usersTasks}
            tableType="tasks"
            setShowModal={setShowModal}
            editData={editATask}
            removeData={removeTaskFromTaskList}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TasksPage;
