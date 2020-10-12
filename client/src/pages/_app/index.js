import React, { useState, Suspense } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import NotFoundPage from "../not-found";
import Modal from "../../components/Modal";
import TasksPage from "../tasks-page";
import UsersPage from "../users-page";
import PageLoader from "../../components/PageLoader";
import allModals from "./helper";
import ContextProvider from "../../context/ContextProviders";
import { toast } from "react-toastify";

toast.configure({
  autoClose: 3000,
  hideProgressBar: true,
});

function App() {
  const [showModal, setShowModal] = useState({
    modalId: " ",
    show: false,
    data: {},
  });
  return (
    <>
      <ContextProvider>
        {showModal.show && (
          <Modal showModal={showModal} setShowModal={setShowModal}>
            <Suspense fallback={<PageLoader />}>
              {allModals[showModal.modalId](setShowModal, showModal?.data)}
            </Suspense>
          </Modal>
        )}
        <Router>
          <Switch>
            <Route
              exact
              path="/users/:userId"
              render={(routerProps) => (
                <TasksPage {...routerProps} setShowModal={setShowModal} />
              )}
            />
            <Route
              exact
              path="/"
              render={() => <UsersPage setShowModal={setShowModal} />}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </ContextProvider>
    </>
  );
}
export default App;
