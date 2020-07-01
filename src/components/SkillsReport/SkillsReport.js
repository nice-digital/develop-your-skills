import React from "react";
import PropTypes from "prop-types";
import { SkillToDevelop } from "./../SkillToDevelop/SkillToDevelop";

export const skillsReportTestId = 'skill-report';

const SkillsReport = ({skillsToDevelop, targetRole}) => {
  console.log(targetRole);
  return (
    <section data-testid={skillsReportTestId}>
      <h3>{targetRole.name}</h3>
      <p>{targetRole.summary.blurb}</p>
      <ul>
        {targetRole.summary.bullets.map((bullet, i) => (
          <li key={i}>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <p>To be a <span><b>{targetRole.name}</b></span>, you need to focus on developing skill in the following areas:</p> 
      <div>
        {skillsToDevelop.map((skill, index) => (
          <div key={index}>
            <SkillToDevelop skill={skill}/>
          </div>
        ))}
      </div>
    </section>    
  );
}

SkillsReport.propTypes = { 
  skillsToDevelop: PropTypes.arrayOf(
    PropTypes.shape(SkillToDevelop.propTypes)).isRequired
 };

 export default SkillsReport;