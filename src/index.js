import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import App from './App';
import FrameworkPage from './components/FrameworkPage/FrameworkPage';
import * as serviceWorker from './serviceWorker';
import skills from './data/skill-definitions.json';
import roles from './data/roles.json';
import levels from './data/level-definitions.json';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/framework">
          <FrameworkPage skills={skills} roles={roles} levels={levels}/>
        </Route>  
      
        <Route path="/">
          <App skills={skills} roles={roles} levels={levels}/>
        </Route>
      </Switch>
    </Router>
  
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
