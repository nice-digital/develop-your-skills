import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './Level.module.scss';

const Level = ({level, isCurrent = false}) => {
  let getClassName = (levelId) => {
    let name = '';
    switch(levelId){
      case 0: name = styles.awareness; break
      case 1: name = styles.working; break;
      case 2: name = styles.practitioner; break;
      case 3: name = styles.expert; break;
      default: ;
    }
    return name ;
  }

  let getHeading = () => {
    return isCurrent ? `Expected level: ${level.name}` : level.name;
  }
  return (
    <div className={getClassName(level.id)}>
      <div>
        <h4>{getHeading()}</h4>
        <p>Some example skills and behaviours at this level include:</p>
        <ul>
          {level.examples.map((example, index) => (
            <li key={index}>
              <ReactMarkdown source={example} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )    
};

export default Level;