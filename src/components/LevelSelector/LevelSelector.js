import React from "react";
import PropTypes from "prop-types";



const LevelSelector = ({level, levelIndex, skillName, setLevelSelected, isSelected}) => {
  let toDashed = (str) => {
    return str.replace(/\s+/g, "-").toLowerCase();
  }

  return (
    <div>
      <div>
        <input 
          type="radio"
          id={toDashed(level.name)}
          name={skillName}
          value={levelIndex}
          onChange={e => setLevelSelected(parseInt(e.target.value))}
          checked={isSelected}></input>
        <label htmlFor={toDashed(level.name)}>{level.name}</label>
      </div>
      <ul>
        {level.examples.map((example, index) => (
          <li key={index}>{example}</li>
        ))}
      </ul>
    </div>
  );
};

LevelSelector.propTypes = { 
  level: PropTypes.shape({
    name: PropTypes.string,
    examples: PropTypes.arrayOf(PropTypes.string)
  }),
  setLevelSelected: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
};

export default LevelSelector;