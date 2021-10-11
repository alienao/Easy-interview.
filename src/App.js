import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.css';

function App() {
  let jsonArr = [];
  const userCreator = (user) => {
    jsonArr.push(user);
    console.log(jsonArr);
  };

  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path="/">
            {' '}
            <Login userArr={jsonArr} userCreatorFunc={userCreator} />{' '}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
