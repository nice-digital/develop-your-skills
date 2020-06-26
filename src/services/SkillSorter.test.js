import SkillSorter from './SkillSorter';


describe('Skill sorter', () => {
  const skill1Name = 'Skill 1';
  const skill2Name = 'Skill 2';
  
  const skillsToDevelop = [
    {
      name: skill1Name,
      levels: {
        deficit: [
          {name: "", examples: []}
        ],
      },
    },
    {
      name: skill2Name,
      levels: {
        deficit: [
          {name: "", examples: []},
          {name: "", examples: []}
        ]
      }
    },
  ];
  it('should sort by skill with largest deficit at the top', () => {
    const sortedSkills = SkillSorter(skillsToDevelop);
    expect(sortedSkills[0].name).toEqual(skill2Name);
    expect(sortedSkills[1].name).toEqual(skill1Name);
  })
});