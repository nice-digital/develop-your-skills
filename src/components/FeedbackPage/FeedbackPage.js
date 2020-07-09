import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner';
import SkillLevelInfo from '../SkillLevelInfo/SkillLevelInfo';

import styles from './FeedbackPage.module.scss';

export default function FeedbackPage({skills, roles}) {
  const UNSELECTED = -1;

  const [roleSelected, setRoleSelected] = React.useState(UNSELECTED);
 
  let roleIsSelected = () => roleSelected > -1

  let showFeedbackTemplate = () => {
    let role = roles[roleSelected];
    let currentSkillLevels = roles[roleSelected].skillLevels;

    return (
      // Inline styling in this block is intentional as its intended to be copied into an email body and needs to go with the HTML
      <div>
        <h2>Feedback email template</h2>
        <p>Select all of the text from the box below, copy and paste into an email.  Send to your manager and any colleagues that you'd appreciate feedback from.</p>
        <div contentEditable={true} className={styles.contentBox}>
          <div>
            <p>Hi</p>
            <p>I'd really appreciate your feedback on my skills for my development review.  Your feedback will help me to develop my skills.  Please do this ASAP, it should only take max 30 minutes of your time.</p>
            <p>Please provide feedback on your colleagues level of skill by commenting below.   Provide specific but concise examples of how they have demonstrated this skill to benefit the team/org.  It's ok to only feedback on some skill areas and leave some blank.  There is a general feedback section at the bottom</p>
            <h2>Current role: {role.name}</h2>
            <p>{role.summary.blurb}</p>
            <ul>
              {role.summary.bullets.map((bullet, i) => (
                <li key={i}>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <h2>Expected skill levels</h2>
            {currentSkillLevels.map((skillLevel, index) => (
              <div>
                <SkillLevelInfo skills={skills} skillLevel={skillLevel} index={index} isForFeedback={true}/>

                <hr style={{color: "red"}}></hr>
                <div style={{color: "red"}}>
                  <h3>Your feedback</h3>
                  <p>How am i doing with this skill? Do i need to work on this or am i doing a great job? Remember to give specific examples. </p>
                </div>
                <div>
                  <p>(Write feedback here)</p>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
                <hr style={{color: "red"}}></hr>
              </div>
            ))}
          </div>

          <div>
            <div style={{color: "red"}}>
              <h3 style={{color: "red"}}>Any other comments</h3>
              <p>Any other general feedback that you'd like to give me? </p>
            </div>
            <div>
              <p>(Write feedback here)</p>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.app}>
      <h1>Skill feedback template</h1>
      <p className="page-header__lead">This skill framework is based on the UK Government <a href="https://www.gov.uk/government/collections/digital-data-and-technology-profession-capability-framework">Digital, Data and Technology Professional Capability Framework</a>.  We use this to help <Link to="/">develop our skills</Link></p>
      <Banner/>
      <section>
        <div>
          <select data-testid="role-select" className={styles.select} value={roleSelected} onChange={e => setRoleSelected(parseInt(e.target.value))}>
            <option key="unset" value="unset">
              Select your current role
            </option>
            {roles.map((role, idx) => (
              <option key={idx} value={idx}>
                {role.name}
              </option>
            ))}
          </select>
          {roleIsSelected() && showFeedbackTemplate()}
        </div>
     </section>  
    </div>
  )
};