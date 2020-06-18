import React from 'react';
import { render } from '@testing-library/react';
import SkillSelector from './SkillSelector';

describe('Skill selector', () => {
    const skill = {
        name: "Skill name",
        levels: [
            {
                name: "level1",
                examples: [
                    "Example 1",
                    "Example 2"
                ]
            }
        ]
    };
    let getByText;

    beforeEach(() => getByText = render(<SkillSelector skill={skill}/>).getByText);

    it('should render skill name', () => {
        expect(getByText(skill.name)).toBeInTheDocument();
    })

    it('should render skill levels with examples', () => {
        expect(getByText(skill.levels[0].name)).toBeInTheDocument();
        expect(getByText(skill.levels[0].examples[0])).toBeInTheDocument();
        expect(getByText(skill.levels[0].examples[1])).toBeInTheDocument();
    })
});