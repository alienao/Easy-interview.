import React from "react";
import Header from "./Header/Header";
import CreateForm from "./CreateForm/CreateForm";
import MainBody from "./MainBody/MainBody";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormHeader from "../FormHeader/FormHeader";
import CenteredTabs from "./Tabs/Tabs";
import QuestionsForm from "./QuestionsForm/QuestionsForm";

function Quiz() {
  return (
    <div className="quiz">
      <Router>
        <Switch>
          <Route path="/form/:id">
            <FormHeader />
            <CenteredTabs />
            <QuestionsForm />
          </Route>

          <Route path="/">
            <Header />
            <CreateForm />
            <MainBody />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Quiz;
