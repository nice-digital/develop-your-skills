import React from 'react';
import { render } from '@testing-library/react';
import SkillSelector from './SkillSelector';

describe('Skill selector', () => {
    it('should render skill details', () => {
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

        const { getByText } = render(<SkillSelector skill={skill}/>);
        expect(getByText(skill.name)).toBeInTheDocument();

    })
});