import React from "react";
import Header from "./header/Header";
import CreateForm from "./createForm/CreateForm";
import MainBody from "./mainBody/MainBody";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormHeader from "../formHeader/FormHeader";
import CenteredTabs from "./tabs/Tabs";
import QuestionsForm from "./questionsForm/QuestionsForm";

function Quiz() {
  return (
    <div className="quiz">
      <Router>
        <Switch>

          <Route path ="/form/:id">
            <FormHeader/>
            <CenteredTabs/>
            <QuestionsForm/>
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
