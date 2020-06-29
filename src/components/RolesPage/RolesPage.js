import React from 'react';
import ReactMarkdown from "react-markdown";

import styles from './RolesPage.module.scss'


const RolesPage = ({skills, roles, levels}) => {

  const UNSELECTED = -1;

  const [roleSelected, setRoleSelected] = React.useState(UNSELECTED);

  let roleIsSelected = () => {
    return roleSelected > -1;
  }

  let getSkillLevelName = (index) => skills[index].name;
  let getSkillLevelExamples = (skill, index) => skills[index].levels[skill.levelId].examples;

  let showSkills = () => {
    let currentSkillLevels = roles[roleSelected].skillLevels;

    return (  
      <div>
        <p>The skills expected for this role are:</p>
        {currentSkillLevels.map((skill, index) => (
          <div>
            <h3>{getSkillLevelName(index)}</h3>
            <p>A skill level of <span><strong>{levels[skill.levelId].name}</strong></span>:</p>
            <ul>
              {getSkillLevelExamples(skill,index).map((example, index2) => (
                <li 
                  key={index2}>
                  <ReactMarkdown source={example}/>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={styles.app}>
      <h1>Develop your skills</h1>
      <a href="/">Back to home</a>
      <section>
        <div>
          <h2>Select role</h2>
          <select data-testid="role-select" value={roleSelected} onChange={e => setRoleSelected(parseInt(e.target.value))}>
            <option key="unset" value="unset">
              Select role
            </option>
            {roles.map((role, idx) => (
              <option key={idx} value={idx}>
                {role.name}
              </option>
            ))}
          </select>
          {roleIsSelected() && showSkills()}
        </div>
     </section>  
    </div>
  )
};

export default RolesPage;