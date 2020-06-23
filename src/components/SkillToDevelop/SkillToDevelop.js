import React from "react";
import PropTypes from "prop-types";
//import Styles from "./SkillsReport.module.scss";

const SkillToDevelop = ({skill}) => {

  const [showDetails, setShowDetails] = React.useState(false)
  const onClick = () => setShowDetails(!showDetails)

  function getSkillLevelDeficitPlan(){
    return (
      <div>
        <p>{skill.levels.current.name}</p>
        <ul>
          {skill.levels.deficit.map((level, index) => (
            <li key={index}>
              <p>{level.name}</p>
              <ul>
              {level.examples.map((example, index) => (
                <li key={index}>
                  <p>{example}</p>
                </li>
              ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (

    <div>
      <div className="Styles.indicatorcontainer">
        {/* {!this.isSkillLevelInDeficit() && this.createPositiveIndicator()}
        {this.isSkillLevelInDeficit() && this.createDeficitIndicators()} */}
      </div>
      <div className="Styles.buttoncontainer">
        <button
            type="button"
            onClick={onClick}>
          {skill.name}
        </button>
      </div>

      {/* <div className={Styles.chevroncontainer}>
        <div className={`fa fa-chevron-${this.getUpDownState()}`}></div>
      </div> */}

      { showDetails ? 
        <div>
            {getSkillLevelDeficitPlan()}
            {/* {!this.isSkillLevelInDeficit() && <p>Well done, your skills are already at a satisfactory level!</p>}  
            {this.isSkillLevelInDeficit() && this.getSkillDeficitPlanSummary()}   */}
        </div>
        : null}
    </div>
  );
}

SkillToDevelop.propTypes = { 
    skill: PropTypes.shape({
        name: PropTypes.string.isRequired,
        levels: PropTypes.shape({
          current: PropTypes.shape({
            name: PropTypes.string.isRequired
          }).isRequired,
          deficit: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
              examples: PropTypes.arrayOf(PropTypes.string).isRequired
            })
          )
        }).isRequired
    }).isRequired
 }

export default SkillToDevelop;