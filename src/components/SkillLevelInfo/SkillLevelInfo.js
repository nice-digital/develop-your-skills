import React from 'react';
import Level from '../Level/Level';
import styles from './SkillLevelInfo.module.scss'


const SkillLevelInfo = ({skills, skillLevel, index}) => {
  const [showAllLevels, setShowAllLevels] = React.useState(false)
  const toggleShowAllLevels = () => setShowAllLevels(!showAllLevels)

  
  let getSkillLevelName = (index) => skills[index].name;
  let getSkillDesc = (index) => skills[index].desc;
  let getCurrentSkillLevel = (skillLevelIdx, index) => {
    let level = skills[index].levels[skillLevelIdx];
    level.id = skillLevelIdx;
    return level;
  }

  let getShowHideText = () => {
    return showAllLevels ? "Hide all levels for this skill" : "Show all levels for this skill";
  }

  let showLevels = (levels) => {
    return (
      <div>
        {showAllLevels ? 
          <div>
            {levels.map((level) => (
              <Level level={level}/>
            ))}
          </div> : null}
      </div>
    )    
  }

  let showNextLevels = (currentLevelIdx, currentSkillIdx) => {
    let nextLevels = skills[currentSkillIdx].levels
                      .map((level, index) => ({...level, id: index}))
                      .slice(currentLevelIdx+1)
    return showLevels(nextLevels);
  }
  let showPreviousLevels = (currentLevelIdx, currentSkillIdx) => {
    let previousLevels = skills[currentSkillIdx].levels
                          .map((level, index) => ({...level, id: index}))
                          .slice(0,currentLevelIdx)
    return showLevels(previousLevels);
  }

  return (
    <div>
      <h3>{getSkillLevelName(index)}</h3>
      <p>{getSkillDesc(index)}</p>
      {showAllLevels ? 
        <div>
          <div className={styles.previousLevels}>
            {showPreviousLevels(skillLevel.levelId, index)}
          </div>
          <div className={styles.currentLevel}>
            <Level level={getCurrentSkillLevel(skillLevel.levelId, index)} isCurrent={true}/>
          </div>
          <div className={styles.nextLevels}>
            {showNextLevels(skillLevel.levelId, index)}
          </div> 
        </div>
      : 
        <div>
          <Level level={getCurrentSkillLevel(skillLevel.levelId, index)} isCurrent={true}/>
        </div>}
      <span 
        className={styles.toggleShowAllLevels}
        onClick={toggleShowAllLevels}>
          {getShowHideText()}
      </span>
    </div>
  )
};

export default SkillLevelInfo;