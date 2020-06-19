import React from "react";
import PropTypes from "prop-types";
import LevelSelector from "./../LevelSelector/LevelSelector"

const SkillSelector = (props) => {

  const [showLevels, setShowLevels] = React.useState(false)
  const onClick = () => setShowLevels(!showLevels)

  return (
    <div key={props.index}>
      <button
          type="button"
          onClick={onClick}>
        {props.skill.name}
      </button>
  
      { showLevels ? 
        <div>
          {props.skill.levels.map((level, index) => (
            <LevelSelector level={level} skillName={props.skill.name} index={index}/>
          ))}
        </div>
        : null}
    </div>
  );
}

SkillSelector.propTypes = { 
    skill: PropTypes.shape({
        name: PropTypes.string.isRequired,
        levels: PropTypes.arrayOf(LevelSelector.propTypes).isRequired
    }).isRequired,
    index: PropTypes.number
 };

export default SkillSelector;