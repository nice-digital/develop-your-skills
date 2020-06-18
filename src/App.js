import React from 'react';
import PropTypes from 'prop-types';
import SkillSelector from './components/SkillSelector/SkillSelector';
import './App.css';

function App({skills}) {
  return (
    <div className="App">
      <h1>Develop your skills</h1>
      {skills.map((skill, index) => (
        <SkillSelector skill={skill} index={index} />
      ))}
    </div>
  );
}


App.propTypes = { 
  skills: PropTypes.arrayOf(SkillSelector.propTypes).isRequired
};

export default App;
