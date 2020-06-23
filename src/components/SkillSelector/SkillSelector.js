import React from "react";
import PropTypes from "prop-types";
import LevelSelector from "./../LevelSelector/LevelSelector"

const SkillSelector = ({skill}) => {

  const [showLevels, setShowLevels] = React.useState(false)
  const onClick = () => setShowLevels(!showLevels)

  return (
    <div>
      <button
          type="button"
          onClick={onClick}>
        {skill.name}
      </button>
  
      { showLevels ? 
        <ul>
          {skill.levels.map((level, index) => (
            <li key={index}>
              <LevelSelector level={level} skillName={skill.name}/>
            </li>
          ))}
        </ul>
        : null}
    </div>
  );
}

SkillSelector.propTypes = { 
    skill: PropTypes.shape({
        name: PropTypes.string.isRequired,
        levels: PropTypes.arrayOf(
          PropTypes.shape(LevelSelector.propTypes)).isRequired
    }).isRequired
 };

export default SkillSelector;