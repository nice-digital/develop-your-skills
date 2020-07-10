import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner';
import SkillLevelInfo from '../SkillLevelInfo/SkillLevelInfo';

import styles from './FeedbackPage.module.scss';

export default function FeedbackPage({skills, roles}) {
  const UNSELECTED = -1;

  const [roleSelected, setRoleSelected] = React.useState(UNSELECTED);
 
  let roleIsSelected = () => roleSelected > -1

  let showFeedbackTemplateWithInlineStyles = () => {
    let role = roles[roleSelected];
    let currentSkillLevels = roles[roleSelected].skillLevels;

    return (
      // Inline styling in this block is intentional as its intended to be copied into an email body and needs to go with the HTML
      <div>
        <h2>Your feedback email template</h2>
        <h3>Instructions</h3>
        <ol>
          <li>Select all of the text from the box below, copy and paste into an email</li>
          <li>Replace MEETING_DATE with your real review date</li>
          <li>Send to your manager and any colleagues that you'd appreciate feedback from.</li>
        </ol>
        <div contentEditable={true} className={styles.contentBox}>
          <div>
            <p>Hi</p>
            <p>I'd really appreciate your feedback on my skills for my development review.  Your feedback will help me to develop my skills.  Please reply with feedback by <strong>MEETING_DATE</strong>, it should only take max 30 minutes of your time.</p>
            <p>My current role is:</p>
            <h2>{role.name}</h2>
            <p>{role.summary.blurb}</p>
            <ul>
              {role.summary.bullets.map((bullet, i) => (
                <li key={i}>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p>To see all the levels for these skills, view the full <Link to="/framework">skill framework</Link></p>
            <h2>Skill levels for this role</h2>
            {currentSkillLevels.map((skillLevel, index) => (
              <div>
                <SkillLevelInfo skills={skills} skillLevel={skillLevel} index={index} isForFeedback={true}/>
                <div style={{color: "red"}}>
                  <h3>Your feedback</h3>
                </div>
                <div>
                  <p>How am i doing with this above skill competency? (Leave one and delete others): </p>
                  
                  <p>Great</p>
                  <p>Good</p>
                  <p>OK (for now)</p>
                  <p>Needs improvement</p>
                  <br/>
                  <p>(If 'great' or 'needs improvement' please leave specific feedback in less than 100 words here)</p>
                  <br/>
                  <br/>
                  <br/>
                </div>
                <hr/>
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
      <h1>Ask for 360 feedback</h1>
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
          {roleIsSelected() && showFeedbackTemplateWithInlineStyles()}
        </div>
     </section>  
    </div>
  )
};