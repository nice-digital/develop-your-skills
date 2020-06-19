import React, { Component } from "react";
import PropTypes from "prop-types";
import LevelSelector from "./../LevelSelector/LevelSelector"

class SkillSelector extends Component {
  render() {
    return (
      <div key={this.props.index}>
        <h4>{this.props.skill.name}</h4>
        {this.props.skill.levels.map((level) => (
          <LevelSelector level={level} skillName={this.props.skill.name}/>
        ))}
      </div>
    );
  }
}

SkillSelector.propTypes = { 
    skill: PropTypes.shape({
        name: PropTypes.string.isRequired,
        levels: PropTypes.arrayOf(LevelSelector.propTypes).isRequired
    }).isRequired,
    index: PropTypes.number
 };

export default SkillSelector;