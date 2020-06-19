import React from 'react';
import PropTypes from 'prop-types';
import SkillSelector from './components/SkillSelector/SkillSelector';
import TargetRole from './components/TargetRole/TargetRole';
import './App.css';

const App = ({skills, roles}) => {
  return (
    <div className="App">
      <h1>Develop your skills</h1>
      <h2>1. Select your skill levels</h2>
      {skills.map((skill, index) => (
        <SkillSelector skill={skill} index={index} />
      ))}
      <h2>2. Select your target role</h2>
      <TargetRole roles={roles} />
    </div>
  );
}

App.propTypes = { 
  skills: PropTypes.arrayOf(SkillSelector.propTypes).isRequired,
  roles: PropTypes.arrayOf(TargetRole.propTypes).isRequired
};

export default App;
