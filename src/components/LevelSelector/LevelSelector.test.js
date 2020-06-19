import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LevelSelector from "./LevelSelector";

describe("LevelSelector ", () => {
  const level = {
    name: "level",
    examples: [
        "Example 1",
        "Example 2"
    ]
  };
  let getByText;

  beforeEach(() => getByText = render(<LevelSelector level={level} skill={{name:""}}/>).getByText);

  it('should render skill levels with examples', () => {
    expect(getByText(level.name)).toBeInTheDocument();
    expect(getByText(level.examples[0])).toBeInTheDocument();
    expect(getByText(level.examples[1])).toBeInTheDocument();
  });

  it('should render skill level as unchecked by default', () => {
    let checkbox = getByText(level.name);
    expect(checkbox).not.toHaveProperty('checked');
  });


});
