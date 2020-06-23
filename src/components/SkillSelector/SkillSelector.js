import React from "react";
import PropTypes from "prop-types";
import LevelSelector from "./../LevelSelector/LevelSelector"

const SkillSelector = ({skill}) => {

  const [showLevels, setShowLevels] = React.useState(false)
  const toggleShowLevels = () => setShowLevels(!showLevels)

  const [selectedLevel, setSelectedLevel] = React.useState(-1);

  return (
    <div>
      <button
          type="button"
          onClick={toggleShowLevels}>
        {skill.name}
        {selectedLevel > -1 && !showLevels && (
          <span className="styles.buttonSub">Selected: {skill.levels[selectedLevel].name}</span>
        )}
      </button>
  
      { showLevels ? 
        <ul>
          {skill.levels.map((level, index) => (
            <li key={index}>
              <LevelSelector level={level} levelIndex={index} skillName={skill.name} setSelectedLevel={setSelectedLevel}/>
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