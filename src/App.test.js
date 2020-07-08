import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';
import { skillsReportTestId } from './components/SkillsReport/SkillsReport';

describe('Develop your skills app', () => {
  const skills = [
    {
      name: "skill1",
      levels: [
        {
          name: "level1",
          examples: [],
        },
      ],
    },
    {
      name: "skill2",
      levels: [
        {
          name: "level1",
          examples: [],
        },
      ],
    },
  ];
  const roles = [
    {
      name: "Role 1 Name",
      summary: {
        blurb: "",
        bullets: []
      },
      skillLevels: [
        { skillId: 0, levelId: 0 },
        { skillId: 1, levelId: 0 }
      ]
    }
  ];
  const levels = [
    { id: 0, name: "Awareness" },
    { id: 1, name: "Working" },
    { id: 2, name: "Practitioner" },
    { id: 3, name: "Expert" },
  ];

  let rerender;
  let construct = () => <App skills={skills} roles={roles} levels={levels} />

  beforeEach(() => {
    rerender = render(construct(), { wrapper: MemoryRouter }).rerender;
  });

  it('should show the main heading', () => {
    expect(screen.getByText('Develop your skills')).toBeInTheDocument();
  });

  it('should render the list of skills', () => {
    expect(screen.getByText('skill1')).toBeInTheDocument();
    expect(screen.getByText('skill2')).toBeInTheDocument();
  });

  describe('when skills not all selected', () => {
    it('should not show the target role selector ', () => {
      expect(screen.queryByText('Select role')).toBeNull();
    });
  });
  describe('when skills are all selected', () => {

    let selectFirstLevelFor = (skill) => {
      const sk = screen.getByText(skill.name);
      fireEvent.click(sk);
      const level = screen.getAllByRole('radio')[0];
      fireEvent.click(level);
      fireEvent.click(sk);
    }

    it('should show the target role selector ', () => {
      selectFirstLevelFor(skills[0]);
      selectFirstLevelFor(skills[1]);

      rerender(construct());
      expect(screen.getByText('Select role')).toBeInTheDocument();
    });

    describe('when target role is also selected', () => {
    
      it('should show the skills report ', () => {
        selectFirstLevelFor(skills[0]);
        selectFirstLevelFor(skills[1]);
        
        rerender(construct());

        fireEvent.change(screen.getByTestId('role-select'), { target: { value: 0 } }) 
               
        const { getByText } = within(screen.getByTestId(skillsReportTestId)); 
        expect(getByText(skills[0].name)).toBeInTheDocument(); 
      });
    });
  });
});
