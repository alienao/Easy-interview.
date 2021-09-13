import Login from './components/Login/Login';
import Signup from './components/signup/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




function App() {
 let jsonArr = []
 const userCreator = (user) => {
   jsonArr.push(user)
   console.log(jsonArr)
 }

  return(
     <Router>
      <div>
        <Switch>
          <Route exact path = "/"> <Login userArr = {jsonArr}/> </Route> 
          <Route exact path = "/signup" > <Signup userCreatorFunc = {userCreator}/> </Route>
        </Switch>
      </div>
    </Router>


    );

}

export default App;
