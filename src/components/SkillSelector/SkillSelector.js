import React from "react";
import PropTypes from "prop-types";
import LevelSelector from "./../LevelSelector/LevelSelector";
import styles from "./SkillSelector.module.scss";

export const UNSELECTED = -1;

export const SkillSelector = ({skill, selectedLevel, setLevelSelected}) => {

  const [showLevels, setShowLevels] = React.useState(false)
  const toggleShowLevels = () => setShowLevels(!showLevels)

  let getUpDownState = () => {
    return showLevels ? "up" : "down";
  }

  let isSelected = (index) => {
    return index == selectedLevel;
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
      </div>
      { showLevels ? 
        <div className={styles.info}>
          <div class="grid grid--gutterless">
            
            {skill.levels.map((level, index) => (
              <section key={index}>
                <LevelSelector
                  level={level}
                  levelIndex={index}
                  skillName={skill.name}
                  setLevelSelected={setLevelSelected}
                  isSelected={isSelected(index)}/>
              </section>
            ))}
          </div>
        </div>
        : null}
      
    </section>
  );
}

SkillSelector.propTypes = { 
    skill: PropTypes.shape({
        name: PropTypes.string.isRequired,
        levels: PropTypes.arrayOf(
          PropTypes.shape(LevelSelector.propTypes)).isRequired
    }).isRequired,
    setLevelSelected: PropTypes.func.isRequired,
    selectedLevel: PropTypes.number.isRequired
 };