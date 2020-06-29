import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import styles from "./SkillToDevelop.module.scss";


export let skillPlan = 'skillPlan';

export const SkillToDevelop = ({skill}) => {

  const [showDetails, setShowDetails] = React.useState(false)
  const onClick = () => setShowDetails(!showDetails)

  let getUpDownState = () => {
    return showDetails ? "up" : "down";
  }
  let isSkillLevelInDeficit = () => {
    return skill.levels.deficit.length > 0;
  }

  let createDeficitIndicators = () => {
    return skill.levels.deficit.map((_) => <div className={`fa fa-arrow-up ${styles.deficitindicator}`}/>);
  }

  let createPositiveIndicator = () => {
    return <div className={`fa fa-arrow-down ${styles.positiveindicator}`}></div>
  }

  let getLevelUpgradePath = () => {
    let path = [<span><strong>{skill.levels.current.name}</strong></span>];
    skill.levels.deficit.forEach((level, index) => {
      if(index < skill.levels.deficit.length){
        path.push(<span className={`fa fa-arrow-right ` + styles.pathArrow}/>);
      }
      path.push(<span><strong>{level.name}</strong></span>);
    });
    return path; 
  }

  let buildSkillDeficitPlan = () => {
    return (
      <ul data-testid={skillPlan}>
        {skill.levels.deficit.map((level, index) => (
          <li key={index}>
            <p>Skill level of <strong>{level.name}</strong> looks like:</p>
            <ul>
            {level.examples.map((example, index) => (
              <li key={index}>
                <ReactMarkdown source={example}/>
              </li>
            ))}
            </ul>
          </li>
        ))}
      </ul>
    )
  }

  let getSkillLevelDeficitPlan = () => {
    if(!isSkillLevelInDeficit()){
      return <p>Well done, your skills are already at a satisfactory level!</p>
    }
    return (
      <div>
        <p>Your current level is <strong>{skill.levels.current.name}</strong>.  You need to work on improving this skill.</p>
        <h4>What you need to do</h4>
        <p>You need to improve your skill level from {getLevelUpgradePath()}</p>
        {buildSkillDeficitPlan()}        
      </div>
    );
  };

  return (
    <section
      className={styles.root} >
      <div 
        className={styles.rowcontainer}
        onClick={onClick}>
        <div className={styles.indicatorcontainer}>
          {!isSkillLevelInDeficit() ? createPositiveIndicator() : createDeficitIndicators()}
        </div>
        <div className={styles.buttoncontainer}>
          <button type="button" className={styles.button}>
            {skill.name}
          </button>
        </div>
        <div className={styles.chevroncontainer}>
          <div className={`fa fa-chevron-${getUpDownState()}`}></div>
        </div>
      </div>
      
      { showDetails && 
        <div className={styles.moreInfo}>
          {getSkillLevelDeficitPlan()}
      </div> }
    </section>
  );
}

SkillToDevelop.propTypes = { 
    skill: PropTypes.shape({
        name: PropTypes.string.isRequired,
        levels: PropTypes.shape({
          current: PropTypes.shape({
            name: PropTypes.string.isRequired
          }).isRequired,
          deficit: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
              examples: PropTypes.arrayOf(PropTypes.string).isRequired
            })
          )
        }).isRequired
    }).isRequired
 }