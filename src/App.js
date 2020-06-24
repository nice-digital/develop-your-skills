import React from 'react';
import PropTypes from 'prop-types';
import SkillSelector from './components/SkillSelector/SkillSelector';
import TargetRole from './components/TargetRole/TargetRole';
import SkillsReport from './components/SkillsReport/SkillsReport';
import styles from './App.module.scss';

const App = ({skills, roles}) => {
  return (
    <div className={styles.app}>
      <h1>Develop your skills</h1>
      <h2>1. Select your skill levels</h2>
      <section> 
        {skills.map((skill, index) => (
          <section key={index}>
            <SkillSelector skill={skill}/>
          </section>
        ))}
      </section>
     
      <h2>2. Select your target role</h2>
      <TargetRole roles={roles} />
      <h2>3. Develop your skills</h2>
      <SkillsReport skillsToDevelop={[]} targetRole={""}/>
    </div>
  );
}

App.propTypes = { 
  skills: PropTypes.arrayOf(
    PropTypes.shape(SkillSelector.propTypes)).isRequired,
  roles: PropTypes.arrayOf(
    PropTypes.shape(TargetRole.propTypes)).isRequired
};

export default App;
