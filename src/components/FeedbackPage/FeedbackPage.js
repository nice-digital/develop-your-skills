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
            <p>I'd really appreciate your feedback for my development review by <strong>MEETING_DATE</strong>.  Comment on any of the skill competency areas below that you can.  There is also a general feedback section at the end, should you wish to provide any further feedback.  Your honest, constructive feedback will be helpful in planning my skill development.  Please remember to reply to me only, NOT REPLY ALL 😊</p>
            <p>Some questions to help guide you through the skill feedback sections below:
              <ul>
                <li>what are my strengths?</li>
                <li>what impacts have i had?</li>
                <li>what do i need to improve?</li>
              </ul>
            </p>
            <p>If you are interested, read more about <a href="https://jvns.ca/blog/2018/02/10/positive-constructive-feedback/">how to write constructive feedback</a>. </p>
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
            
            <h2>Skill levels for this role</h2>
            {currentSkillLevels.map((skillLevel, index) => (
              <div>
                <SkillLevelInfo skills={skills} skillLevel={skillLevel} index={index} isForFeedback={true}/>
                <p>Skill levels build on previous levels. See the <Link to="/framework"> other levels of this skill</Link></p>
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
                  <p>(write specific comments here - max 100 words)</p>
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
              <h3 style={{color: "red"}}>Your general comments</h3>
              <p>Any other general feedback that you'd like to give me? Any specific successes or improvements worth pointing out? </p>
            </div>
            <div>
              <p>(Write feedback here)</p>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
          <p>Thanks in advance!</p>
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