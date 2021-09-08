
import CustomLogin from './components/Login/CustomLogin'
import ModalDialog from './components/signup/ModalDialog/ModalDialog';
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
          <Route exact path = "/sign-up" component={ModalDialog} />
            {/* <ModalDialog/> */}
          {/* </Route> */}
        </Switch>
      </div>
    </Router>


    );
}

export default App;
