import CustomLogin from './components/login/CustomLogin';
import Signup from './components/signup/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return(
     <Router>
      <div>
        <Switch>
          <Route exact path = "/" component= {CustomLogin}/> 
          <Route exact path = "/signup" component={Signup} />
        </Switch>
      </div>
    </Router>


    );

}

export default App;
