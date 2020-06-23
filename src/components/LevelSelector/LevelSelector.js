import React from "react";
import PropTypes from "prop-types";

let toDashed = (str) => {
  return str.replace(/\s+/g, "-").toLowerCase();
}

const LevelSelector = ({level, skillName}) => {
  return (
    <div>
      <div>
        <input type="radio" id={toDashed(level.name)} name={skillName} value={level.name}></input>
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
  })
};

export default LevelSelector;