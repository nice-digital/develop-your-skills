import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SkillSelector from "./SkillSelector";

describe("Skill selector", () => {
  const skill = {
    name: "Skill name",
    levels: [
      {
        name: "level1",
        examples: []
      },
      {
        name: "level2",
        examples: []
      }
    ],
  };
  
  beforeEach(() => render(<SkillSelector skill={skill}/>));

  it('should render skill name', () => {
    expect(screen.getByText(skill.name)).toBeInTheDocument();
  });

  it('should hide level selector by default',() => {
    expect(screen.queryByText(skill.levels[0].name)).not.toBeInTheDocument();
  })


  describe('When skill is expanded', () => {

    beforeEach(async () => { 
      fireEvent.click(screen.getByText(skill.name)); 
      await screen.getByText(skill.levels[0].name);
    });
    
    it('should show skill levels', () => {
      expect(screen.getByText(skill.levels[0].name)).toBeInTheDocument();
      expect(screen.getByText(skill.levels[1].name)).toBeInTheDocument();
    });

    it('should only be able to select one level in the group', () => {
      const radio1 = screen.getByLabelText(skill.levels[0].name);
      const radio2 = screen.getByLabelText(skill.levels[1].name);
  
      fireEvent.click(radio1);
      expect(radio1).toBeChecked();
      expect(radio2).not.toBeChecked();
      fireEvent.click(radio2);
      expect(radio1).not.toBeChecked();
      expect(radio2).toBeChecked();
    })

      
    it('should have no level selected by default', () => {
      const radios = screen.getAllByRole('radio');
      radios.forEach((radio)=>{
        expect(radio).not.toBeChecked();
      });
    });

    it('should collapse levels when skill name is clicked ', () => {
      fireEvent.click(screen.getByText(skill.name)); 
      expect(screen.queryByText(skill.levels[0].name)).toBeNull();   
    });

  });

  describe('When level is selected and levels are collapsed', () => {
    it('should show selected level text ', () => {  
      const levelName = skill.levels[0].name    
      fireEvent.click(screen.getByText(skill.name)); //expand
      fireEvent.click(screen.getByText(levelName)); //click level
      fireEvent.click(screen.getByText(skill.name)); //collapse

      const selectedLevel = 'Selected: '+levelName;
      expect(screen.queryByText(selectedLevel)).toBeInTheDocument();   
    });
  })
});
