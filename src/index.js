import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import skills from './data/skills.json';
import roles from './data/roles.json';
import levels from './data/levels.json';

ReactDOM.render(
  <React.StrictMode>
    <App skills={skills} roles={roles} levels={levels}/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
