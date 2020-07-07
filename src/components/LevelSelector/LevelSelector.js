import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import Level from '../Level/Level';
import styles from "./LevelSelector.module.scss";

const LevelSelector = ({level, levelIndex, skillName, setLevelSelected, isSelected}) => {
  let toDashed = (str) => {
    return str.replace(/\s+/g, "-").toLowerCase();
  }

  return (
    <div className={styles.container}>
      <div>
        <Level level={level}/>
      </div>
      <label 
        className={`${styles.pushRight} ${styles.label}`}
        htmlFor={toDashed(level.name)}>Select this level</label>
      <div className={`${styles.item}`}>
        <div className={styles.radio}>
          <input 
            type="radio"
            id={toDashed(level.name)}
            name={skillName}
            value={levelIndex}
            onChange={e => setLevelSelected(parseInt(e.target.value))}
            checked={isSelected}></input>
        </div>
      </div>
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