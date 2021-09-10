import CustomLogin from './components/Login/CustomLogin';
import Signup from './components/signup/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from 'react';



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
          <Route exact path = "/"> <CustomLogin userArr = {jsonArr}/> </Route> 
          <Route exact path = "/signup" > <Signup userCreatorFunc = {userCreator}/> </Route>
        </Switch>
      </div>
    </Router>


    );

}

export default App;
