import React from "react";
import PropTypes from "prop-types";
import LevelSelector from "./../LevelSelector/LevelSelector";
import styles from "./SkillSelector.module.scss";

const SkillSelector = ({skill}) => {

  const [showLevels, setShowLevels] = React.useState(false)
  const toggleShowLevels = () => setShowLevels(!showLevels)

  const [selectedLevel, setSelectedLevel] = React.useState(-1);

  let getUpDownState = () => {
    return showLevels ? "up" : "down";
  }

  let isSelected = (index) => {
    return index==selectedLevel;
  }

  return (
    <section 
      className={styles.root}>
      <div className={styles.rowcontainer}>
        <div className={styles.buttoncontainer}>
          <button
              type="button"
              onClick={toggleShowLevels}
              className={styles.button}>
            {skill.name}
            {selectedLevel > -1 && !showLevels && (
              <span className={styles.buttonSub}>Selected: {skill.levels[selectedLevel].name}</span>
            )}
          </button>
        </div>
        <div className={styles.chevroncontainer}>
          <div className={`fa fa-chevron-${getUpDownState()}`}></div>
        </div>
    
        { showLevels ? 
          <div className={styles.info}>
            {skill.levels.map((level, index) => (
              <section key={index}>
                <LevelSelector
                  level={level}
                  levelIndex={index}
                  skillName={skill.name}
                  setSelectedLevel={setSelectedLevel}
                  isSelected={isSelected(index)}/>
              </section>
            ))}
          </div>
          : null}
      </div>
    </section>
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