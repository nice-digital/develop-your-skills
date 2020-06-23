import React from "react";
import { render, screen } from "@testing-library/react";
import SkillsReport from "./SkillsReport";

describe('Skills report', () => {
  const skillsToDevelop = [
    { 
      "name": "Skill 1"
    },
    {
      "name": "Skill 2"
    }
  ];
  const targetRole = "Target role";

  beforeEach(() => render(<SkillsReport targetRole={targetRole} skillsToDevelop={skillsToDevelop}/>));

  it('should show target role blurb', () => {
    expect(screen.getByText('Target role')).toBeInTheDocument();
  });

  it('should show list of skills to develop', () => {
    expect(screen.getByText('Skill 1')).toBeInTheDocument();
    expect(screen.getByText('Skill 2')).toBeInTheDocument();
  });
});
