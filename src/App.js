import React from 'react';
import PropTypes from 'prop-types';
import { SkillSelector, UNSELECTED } from './components/SkillSelector/SkillSelector';
import TargetRole from './components/TargetRole/TargetRole';
import SkillsReport from './components/SkillsReport/SkillsReport';
import styles from './App.module.scss';

const App = ({skills, roles}) => {

  const [currentSkillLevels, setCurrentSkillLevels] = 
    React.useState(skills.map((_) => UNSELECTED));

  const [targetRole, setTargetRole] = React.useState(UNSELECTED);

  let setSkillLevel = (skillIndex) => {
    return (levelIndex) => {
      let newSkills = currentSkillLevels;
      newSkills[skillIndex]=levelIndex;
      setCurrentSkillLevels([...newSkills]);
    }
  }

  let getSkillLevel = (skillIndex) => {
    return currentSkillLevels[skillIndex];
  }



  let getSkillsToDevelop = () => {

  //   skill: PropTypes.shape({
  //     name: PropTypes.string.isRequired,
  //     levels: PropTypes.shape({
  //       current: PropTypes.shape({
  //         name: PropTypes.string.isRequired
  //       }).isRequired,
  //       deficit: PropTypes.arrayOf(
  //         PropTypes.shape({
  //           name: PropTypes.string.isRequired,
  //           examples: PropTypes.arrayOf(PropTypes.string).isRequired
  //         })
  //       )
  //     }).isRequired
  // }).isRequired
    let skillsToDevelop =  
      currentSkillLevels.map((_,index) => (
        {
          name: skills[index].name
        }));    
    return skillsToDevelop;
  };

  let shouldShowTargetRole = () => {
    return !currentSkillLevels.includes(UNSELECTED);
  }

  let showTargetRoleSection = () => {
    return (
      <section>
        <h2>2. Select your target role</h2>
        <TargetRole roles={roles} setRoleSelected={setTargetRole} />          
      </section>     
    );
  };

  let shouldShowSkillReport = () => {
    return targetRole > UNSELECTED;
  }


  let showSkillReportSection = () => {
    return (
      <section>
        <h2>3. Develop your skills</h2>
        <SkillsReport skillsToDevelop={getSkillsToDevelop()} targetRole={roles[targetRole].name}/> :
      </section>
    );
  };

  return (
    <div className={styles.app}>
      <h1>Develop your skills</h1>
      <h2>1. Select your skill levels</h2>
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
      {shouldShowSkillReport() && showSkillReportSection()}      
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
