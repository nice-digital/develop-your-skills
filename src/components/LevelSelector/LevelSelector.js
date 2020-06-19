import React from "react";
import PropTypes from "prop-types";

let toDashed = (str) => {
  return str.replace(/\s+/g, "-").toLowerCase();
}

const LevelSelector = (props) => {
  return (
    <div key={props.index}>
      <div>
        <input type="radio" id={toDashed(props.level.name)} name={props.skillName} value={props.level.name}></input>
        <label htmlFor={toDashed(props.level.name)}>{props.level.name}</label>
      </div>
      <ol>
        {props.level.examples.map((example, index) => (
          <li key={index}>{example}</li>
        ))}
      </ol>
    </div>
  );
};

LevelSelector.propTypes = { 
  level: PropTypes.shape({
    name: PropTypes.string,
    examples: PropTypes.arrayOf(PropTypes.string)
  }),
  skillName: PropTypes.string.isRequired,
  index: PropTypes.number
};

export default LevelSelector;