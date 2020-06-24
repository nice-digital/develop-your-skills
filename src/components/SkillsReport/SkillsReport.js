import React from "react";
import PropTypes from "prop-types";
import SkillToDevelop from "./../SkillToDevelop/SkillToDevelop";

export const skillsReportTestId = 'skill-report';

const SkillsReport = ({skillsToDevelop, targetRole}) => {

  return (
    <section data-testid={skillsReportTestId}>
      <p>To be a <span><b>{targetRole}</b></span>, you need to focus on developing skill in the following areas:</p> 
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
    PropTypes.shape(SkillToDevelop.propTypes)).isRequired,
  targetRole: PropTypes.string
 };

 export default SkillsReport;