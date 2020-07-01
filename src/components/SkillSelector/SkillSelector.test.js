import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { SkillSelector, UNSELECTED } from "./SkillSelector";

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
  let selectedLevel = UNSELECTED;
  let setLevel = (index) => selectedLevel=index;

  let rerender;
  let construct = () => {
    return <SkillSelector
            skill={skill}
            selectedLevel={selectedLevel}
            setLevelSelected={setLevel}/>
  }

  beforeEach(() => {
    selectedLevel = UNSELECTED;
    rerender = render(construct()).rerender;
  });

  let clickLevelRerender = (level) => {
    fireEvent.click(level);
    rerender(construct());
  }

  it('should render skill name', () => {
    expect(screen.getByText(skill.name)).toBeInTheDocument();
  });

  it('should hide level selector by default',() => {
    expect(screen.queryByText(skill.levels[0].name)).not.toBeInTheDocument();
  })


  describe('When skill is expanded', () => {

    beforeEach(async () => { 
      fireEvent.click(screen.getByText(skill.name)); 
      await screen.getByText(skill.levels[0].name, {exact: false});
    });
    
    it('should show skill levels', () => {
      expect(screen.getByText(skill.levels[0].name, {exact: false})).toBeInTheDocument();
      expect(screen.getByText(skill.levels[1].name, {exact: false})).toBeInTheDocument();
    });

    it('should only be able to select one level in the group', () => {
      let level1 = screen.getAllByRole('radio')[0];
      let level2;

      clickLevelRerender(level1);
      level1 = screen.getAllByRole('radio')[0];;
      level2 = screen.getAllByRole('radio')[1];;

      expect(level1).toBeChecked();
      expect(level2).not.toBeChecked();

      clickLevelRerender(level2);
      level1 = screen.getAllByRole('radio')[0];;
      level2 = screen.getAllByRole('radio')[1];;
      expect(level1).not.toBeChecked();
      expect(level2).toBeChecked();
    })

    
    it('should retain level selection on expand/collapse', () => {
      const radio = screen.getAllByRole('radio')[1];
      clickLevelRerender(radio);
      fireEvent.click(screen.getByText(skill.name)); 
      fireEvent.click(screen.getByText(skill.name)); 
      expect(radio).toBeChecked();
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
      const radio = screen.getAllByRole('radio')[0];
      clickLevelRerender(radio);
      fireEvent.click(screen.getByText(skill.name)); //collapse

      const selectedLevel = 'Selected: '+levelName;
      expect(screen.queryByText(selectedLevel)).toBeInTheDocument();   
    });
  })
});
