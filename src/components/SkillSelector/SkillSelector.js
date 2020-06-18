import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SkillSelector extends Component {
    
    render(){
        return (
            <li key={this.props.index}>
                <p>{this.props.skill.name}</p>
            </li>
        )
    }
}


SkillSelector.propTypes = { 
    skill: PropTypes.shape({
        name: PropTypes.string,
    }).isRequired,
    index: PropTypes.number
 };

export default SkillSelector;