import React from "react";
import { render, screen } from "@testing-library/react";
import SkillsReport from "./SkillsReport";

describe('Skills report', () => {
  const skillsToDevelop = [
    {
      name: "Skill 1",
      levels: {
        current: {
          name: "",
        },
        deficit: [],
      },
    },
    {
      name: "Skill 2",
      levels: {
        current: {
          name: "",
        },
        deficit: [],
      },
    },
  ];
  const targetRole = { 
    name: "Target role",
    summary: {
      blurb: "Summary",
      bullets: []
    }
  };

  beforeEach(() => render(<SkillsReport targetRole={targetRole} skillsToDevelop={skillsToDevelop}/>));

  it('should show target role blurb', () => {
    expect(screen.getByText('Summary')).toBeInTheDocument();
  });

  it('should show list of skills to develop', () => {
    expect(screen.getByText('Skill 1')).toBeInTheDocument();
    expect(screen.getByText('Skill 2')).toBeInTheDocument();
  });
});
