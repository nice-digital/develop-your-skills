import React from "react";
import { render, screen } from "@testing-library/react";
import TargetRole from "./TargetRole";

describe("Skill selector", () => {
  const roles = [
    {
      "name": "Role 1 Name",
      "id": 0
    },
    {
      "name": "Role 2 Name",
      "id": 1
    }
  ];
  
  beforeEach(() => render(<TargetRole roles={roles}/>));

  it('should show list of role names', () => {
    expect(screen.getByText('Role 1 Name')).toBeInTheDocument();
    expect(screen.getByText('Role 2 Name')).toBeInTheDocument();
  });
});
