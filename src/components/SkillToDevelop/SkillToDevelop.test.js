import React from "react";
import { render, fireEvent, screen, within } from "@testing-library/react";
import { SkillToDevelop, skillPlan } from "./SkillToDevelop";

describe("Skill to develop", () => {
  const skill = {
    name: "Skill name",
    levels: {
      current : {
        name: "Current level name"
      }, 
      deficit: [
        {
          name: "Deficit level name 1",
          examples: [
            "Example1 1",
            "Example1 2"
          ]
        },
        {
          name: "Deficit level name 2",
          examples: [
            "Example2 1",
            "Example2 2"
          ]
        }
      ]
    }
  };
  
  beforeEach(() => render(<SkillToDevelop skill={skill}/>));

  it('should render skill name', () => {
    expect(screen.getByText(skill.name)).toBeInTheDocument();
  });

  it('should hide details by default',() => {
    expect(screen.queryByText(skill.levels.current.name)).not.toBeInTheDocument();
  })

  describe('When skill is expanded', () => {

    beforeEach(async () => { 
      fireEvent.click(screen.getByText(skill.name)); 
      await screen.getByText('What you need to do');
    });
    
    it('should show skill levels and examples', () => {
      const { getByText } = within(screen.getByTestId(skillPlan));

      expect(getByText(skill.levels.deficit[0].name, {exact: false})).toBeInTheDocument();
      expect(getByText(skill.levels.deficit[0].examples[0])).toBeInTheDocument();
      expect(getByText(skill.levels.deficit[0].examples[1])).toBeInTheDocument();
      expect(getByText(skill.levels.deficit[1].name, {exact: false})).toBeInTheDocument();
      expect(getByText(skill.levels.deficit[1].examples[0])).toBeInTheDocument();
      expect(getByText(skill.levels.deficit[1].examples[1])).toBeInTheDocument();

    });
   
  });
});
