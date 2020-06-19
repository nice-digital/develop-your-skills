import React, { Component } from "react";
import PropTypes from "prop-types";

class LevelSelector extends Component {

  toDashed(str) {
    return str.replace(/\s+/g, "-").toLowerCase();
  }

  render(){
    return (
      <div>
        <div>
          <input type="radio" id={this.toDashed(this.props.level.name)} name={this.props.skillName} value={this.props.level.name}></input>
          <label htmlFor={this.toDashed(this.props.level.name)}>{this.props.level.name}</label>
        </div>
        <ol>
          {this.props.level.examples.map((example, index) => (
            <li key={index}>{example}</li>
          ))}
        </ol>
      </div>
    )
  };
};

LevelSelector.propTypes = { 
  level: PropTypes.shape({
    name: PropTypes.string,
    examples: PropTypes.arrayOf(PropTypes.string)
  }),
  skillName: PropTypes.string.isRequired
};

export default LevelSelector;