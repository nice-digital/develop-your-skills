import React from "react";
import PropTypes from "prop-types";
import SkillToDevelop from "./../SkillToDevelop/SkillToDevelop";

const SkillsReport = (props) => {

  return (
    <section>
      <p>To be a <span><b>{props.targetRole}</b></span>, you need to focus on developing skill in the following areas:</p> 
      <ul>
        {props.skillsToDevelop.map((skill, index) => (
          <li key={index}>
            <SkillToDevelop skill={skill}/>
          </li>
        ))}
      </ul>
    </section>    
  );
}

SkillsReport.propTypes = { 
  skillsToDevelop: PropTypes.arrayOf( 
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  targetRole: PropTypes.string
 };

export default SkillsReport;