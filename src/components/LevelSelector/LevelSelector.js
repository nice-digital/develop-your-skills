import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import styles from "./LevelSelector.module.scss";

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
        <label 
          htmlFor={toDashed(level.name)}
          className={styles.levelLabel}>{level.name}</label>
      </div>
      <ul>
        {level.examples.map((example, index) => (
          <li 
            className={styles.levelLabel}
            key={index}>
            <ReactMarkdown source={example}/>
          </li>
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