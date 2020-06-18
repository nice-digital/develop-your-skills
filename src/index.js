import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { importSkills } from './importer/importer';

const dataUrl = 'data/example-skills.yml';

fetch(dataUrl)
  .then((r) => r.text())
  .then(yml  => {
    const skills = importSkills(yml);
    ReactDOM.render(
      <React.StrictMode>
        <App skills={skills}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }) 

// const yml = fs.readFileSync('example-skills.yml');




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
