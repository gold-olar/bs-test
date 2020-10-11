import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import NotFoundPage from "../not-found";

function App() {
  return (
    <>
      <Router>
        <>
          <Switch>
            <Route component={NotFoundPage} />
          </Switch>
        </>
      </Router>
    </>
  );
}
export default App;
