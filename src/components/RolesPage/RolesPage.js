import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import Banner from '../Banner';

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
    let role = roles[roleSelected];
    return (
      <div>
        <h2>{role.name}</h2>
        <p>{role.summary.blurb}</p>
        <ul>
          {role.summary.bullets.map((bullet, i) => (
            <li key={i}>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <p>The levels of skill expected for this role are:</p>
        {currentSkillLevels.map((skill, index) => (
          <div>
            <h3>{getSkillLevelName(index)}</h3>
            <h4>Level: {levels[skill.levelId].name}</h4>
            <p>Some example skills and behaviours at this level include:</p>
            <ul>
              {getSkillLevelExamples(skill, index).map((example, index2) => (
                <li key={index2}>
                  <ReactMarkdown source={example} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.app}>
      <h1>Skill framework</h1>
      <p className="page-header__lead">This skill framework is based on the UK Government <a href="https://www.gov.uk/government/collections/digital-data-and-technology-profession-capability-framework">Digital, Data and Technology Professional Capability Framework</a>.  We use this to help <Link to="/">develop our skills</Link></p>
      <Banner/>
      <section>
        <div>
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