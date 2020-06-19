import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { getSkills, getRoles, getLevels } from './services/getData';

const skillsUrl = 'data/example-skills.yml';
const rolesUrl = 'data/example-roles.json';
const levelsUrl = 'data/example-levels.json';

const skills = getSkills(skillsUrl);
const roles = getRoles(rolesUrl);
// const levels = getLevels(levelsUrl);


ReactDOM.render(
  <React.StrictMode>
    <App skills={skills} roles={roles}/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
