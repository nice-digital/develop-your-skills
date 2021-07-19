import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { SkillSelector, UNSELECTED } from './components/SkillSelector/SkillSelector';
import TargetRole from './components/TargetRole/TargetRole';
import SkillsReport from './components/SkillsReport/SkillsReport';
import { DeficitCalculator } from './services/DeficitCalculator';
import SkillSorter from './services/SkillSorter';
import Banner from './components/Banner';
import { getQueryStringValueAsString, getQueryStringValueAsNumber, setQueryStringValue } from "./utils/queryString";
import styles from './App.module.scss';

const App = ({skills, roles, levels}) => {
  const targetRoleKey = 'target';
  const nameKey = 'name';

  const [currentSkillLevels, setCurrentSkillLevels] = 
    React.useState( skills.map((skill) => getQueryStringValueAsNumber(skill.id) ?? UNSELECTED));
  const [targetRole, setTargetRole] = React.useState( getQueryStringValueAsNumber(targetRoleKey) ?? UNSELECTED);
  const [name, setName] = React.useState( getQueryStringValueAsString(nameKey) || '');

  let setSkillLevel = (skillIndex) => {
    return (levelIndex) => {
      let newSkills = currentSkillLevels;
      newSkills[skillIndex]=levelIndex;
      setCurrentSkillLevels([...newSkills]);
      setQueryStringValue(skills[skillIndex].id, levelIndex);
    }
  }

  let setTargetRoleCallback = (role) => {
    setTargetRole(role);
    setQueryStringValue(targetRoleKey, role);
  }

  let setNameCallback = (newName) => {
    setName(newName);
    setQueryStringValue(nameKey, newName);
  }

  let getSkillLevel = (skillIndex) => {
    return currentSkillLevels[skillIndex];
  }

  let getSkillsToDevelop = () => {
    let skillsToDevelop = DeficitCalculator(skills, roles, levels, currentSkillLevels, targetRole);
    const sortedSkills = SkillSorter(skillsToDevelop);
    return sortedSkills;
  };

  let shouldShowTargetRole = () => {
    return !currentSkillLevels.includes(UNSELECTED);
  }

  let showTargetRoleSection = () => {
    return (
      <section className={styles.section}>
        <h2>3. Select your target role</h2>
        <TargetRole roles={roles} setRoleSelected={setTargetRoleCallback} targetRole={targetRole} />          
      </section>     
    );
  };

  let shouldShowSkillReport = () => {
    return targetRole > UNSELECTED;
  }


  let showSkillReportSection = () => {
    return (
      <section className={styles.section}>
        <h2>4. Develop your skills</h2>
        <SkillsReport skillsToDevelop={getSkillsToDevelop()} targetRole={roles[targetRole]}/>
      </section>
    );
  };

  return (
    <div className={styles.app}>
      <div className="page-header">
        <h1 className="page-header__heading">Develop your skills</h1>
        <p className="page-header__lead">Identify skill development areas using our <Link to="/framework">skill framework</Link></p>
        <Banner/>
      </div>
      <h2>1. Enter your name</h2>
      <div>
        <label htmlFor="fname">Name:</label>
        <input type="text" id="fname" name="fname" onChange={e => setNameCallback(e.target.value)} value={name}></input>
      </div>
      <h2>2. Select your skill levels</h2>
      <section> 
        {skills.map((skill, index) => (
          <section key={index}>
            <SkillSelector 
              skill={skill}
              selectedLevel={getSkillLevel(index)}
              setLevelSelected={setSkillLevel(index)}/>
          </section>
        ))}
      </section>
      {shouldShowTargetRole() && showTargetRoleSection()}      
      {shouldShowTargetRole() && shouldShowSkillReport() && showSkillReportSection()}      
    </div>
  );
}

App.propTypes = { 
  skills: PropTypes.arrayOf(
    PropTypes.shape(SkillSelector.PropTypes)).isRequired,
  roles: PropTypes.arrayOf(
    PropTypes.shape(TargetRole.propTypes)).isRequired
};

export default App;
