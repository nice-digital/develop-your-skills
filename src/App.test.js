import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Develop your skills app', () => {
  const skills = [{name: "skill1", levels: []}, {name: "skill2", levels: []}];
  const roles = [];

  beforeEach(() => {
    render(<App skills={skills} roles={roles}/>);
  })

  it('should show the main heading', () => {
    expect(screen.getByText('Develop your skills')).toBeInTheDocument();
  });

  it('should render the list of skills', () => {
    expect(screen.getByText('skill1')).toBeInTheDocument();
    expect(screen.getByText('skill2')).toBeInTheDocument();
  })

  it('should show the target role selector', () => {
    expect(screen.getByText('Select role')).toBeInTheDocument();
  });
  // it('should show the skill report', () => {
  //   expect(screen.getByText('you need to focus on developing skill in the following areas')).toBeInTheDocument();
  // });
});
