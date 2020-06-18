import React, { Component } from "react";
import PropTypes from "prop-types";

class SkillSelector extends Component {
  render() {
    return (
      <div key={this.props.index}>
        <h4>{this.props.skill.name}</h4>
        {this.props.skill.levels.map((level) => (
          <div>
            <h5>{level.name}</h5>
            <ol>
              {level.examples.map((example, index) => (
                <li key={index}>{example}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    );
  }
}

const Level = (PropTypes.shape({
    name: PropTypes.string,
    examples: PropTypes.arrayOf(PropTypes.string)
}))

SkillSelector.propTypes = { 
    skill: PropTypes.shape({
        name: PropTypes.string.isRequired,
        levels: PropTypes.arrayOf(Level).isRequired
    }).isRequired,
    index: PropTypes.number
 };

export default SkillSelector;