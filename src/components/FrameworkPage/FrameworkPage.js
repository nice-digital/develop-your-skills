import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner';
import SkillLevelInfo from '../SkillLevelInfo/SkillLevelInfo';

import styles from './FrameworkPage.module.scss'

const FrameworkPage = ({skills, roles, levels}) => {

  const UNSELECTED = -1;

  const [roleSelected, setRoleSelected] = React.useState(UNSELECTED);
 
  let roleIsSelected = () => roleSelected > -1


  let showSkills = () => {
    let role = roles[roleSelected];
    let currentSkillLevels = roles[roleSelected].skillLevels;

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
        {currentSkillLevels.map((skillLevel, index) => (
          <SkillLevelInfo skills={skills} skillLevel={skillLevel} index={index}/>
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

export default FrameworkPage;