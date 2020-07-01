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
      <div data-g="1">
        <div class="grid-example-item">
        <input 
          type="radio"
          className={styles.centred}
          id={toDashed(level.name)}
          name={skillName}
          value={levelIndex}
          onChange={e => setLevelSelected(parseInt(e.target.value))}
          checked={isSelected}></input>
        </div>
      </div>
      <div data-g="11">
        <div className="grid-example-item">
          <label htmlFor={toDashed(level.name)}><h4 className={styles.noMargin}>Level: {level.name}</h4></label>
          <p>Some example skills and behaviours at this level include:</p>
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