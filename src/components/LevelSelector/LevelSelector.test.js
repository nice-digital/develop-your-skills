import React from "react";
import { render, screen } from "@testing-library/react";
import LevelSelector from "./LevelSelector";

describe("LevelSelector ", () => {
  const level = {
    name: "level",
    examples: [
        "Example 1",
        "Example 2"
    ]
  };
  

  describe('when no level is selected', () => {
    let getByText;
    beforeEach(() => 
      getByText = render(
        <LevelSelector 
          level={level}
          levelIndex={0}
          skillName={""}
          setSelectedLevel={() => {}}
          isSelected={false}/>).getByText);

    it('should render skill levels with examples', () => {
      expect(getByText(level.name)).toBeInTheDocument();
      expect(getByText(level.examples[0])).toBeInTheDocument();
      expect(getByText(level.examples[1])).toBeInTheDocument();
    });
  
    it('should render skill level as unchecked by default', () => {
      let checkbox = getByText(level.name);
      expect(checkbox).not.toHaveProperty('checked');
    }); 
  })
  describe('when a level is selected', () => {
    
    it('should set radiobutton as checked', () => {
      render(<LevelSelector 
        level={level}
        levelIndex={0}
        skillName={""}
        setSelectedLevel={() => {}}
        isSelected={true}/>);

      let radio = screen.getByRole('radio');
      expect(radio).toHaveProperty('checked');
    });
  })
});

