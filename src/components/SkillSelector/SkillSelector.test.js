import React from "react";
import { render, fireEvent } from "@testing-library/react";
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
  let container;
  
  beforeEach(() => container = { container } = render(<SkillSelector skill={skill} />));

  it('should render skill name', () => {
    expect(container.getByText(skill.name)).toBeInTheDocument();
  });

  it('should render skill levels', () => {
    expect(container.getByText(skill.levels[0].name)).toBeInTheDocument();
    expect(container.getByText(skill.levels[1].name)).toBeInTheDocument();
  });

  
  it('should have no level selected by default', () => {
    const radios = container.getAllByRole('radio');
    radios.forEach((radio)=>{
      expect(radio).not.toBeChecked();
    });
  })

  it('should have selectable levels in an exclusive group', () => {
    const radio1 = container.getByLabelText('level1');
    const radio2 = container.getByLabelText('level2');

    fireEvent.click(radio1);
    expect(radio1).toBeChecked();
    expect(radio2).not.toBeChecked();
    fireEvent.click(radio2);
    expect(radio1).not.toBeChecked();
    expect(radio2).toBeChecked();
  })

});
