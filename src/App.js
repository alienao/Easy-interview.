import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Quiz from "./components/Quiz/Quiz";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./components/User/User";
import UserStart from "./components/UserStart/UserStart";

function App() {
  let jsonArr = [];
  const userCreator = (user) => {
    jsonArr.push(user);
    console.log(jsonArr);
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            {" "}
            <Login userArr={jsonArr} />{" "}
          </Route>
          <Route exact path="/signup">
            {" "}
            <Signup userCreatorFunc={userCreator} />{" "}
          </Route>
          <Route exact path="/userStart"><UserStart/></Route>
          <Route path="/user"><User/></Route>
          <Route exact patch="/quiz">
            <Quiz />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
