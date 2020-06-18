import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
    const skills = [{name: "skill1", levels: []}, {name: "skill2", levels: []}];
  it('should show the heading', () => {
    const { getByText } = render(<App skills={skills}/>);
    expect(getByText('Develop your skills')).toBeInTheDocument();
  });

  it('should render the list of skills', () => {

    const { getByText } = render(<App skills={skills}/>);
    expect(getByText('skill1')).toBeInTheDocument();
    expect(getByText('skill2')).toBeInTheDocument();
  })
});
