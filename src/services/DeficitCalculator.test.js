import { DeficitCalculator, getTargetSkillLevel, getCurrentSkillLevels, getDeficitsForSkill } from './DeficitCalculator';

describe('Deficit calculator', () => {
  const skills = [
    {
      name: "skill1",  
      levels: [
        {
          name: "Awareness",
          examples: ["Awareness example1", "Awareness example2"],
        },
        {
          name: "Working",
          examples: ["Working example1", "Working example2"],
        },
        {
          name: "Practitioner",
          examples: ["Practitioner example1", "Practitioner example2"],
        },
        {
          name: "Expert",
          examples: ["Expert example1", "Expert example2"],
        }
      ],   
    }
  ];
  const levels = [
    { id: 0, name: "Awareness" },
    { id: 1, name: "Working" },
    { id: 2, name: "Practitioner" },
    { id: 3, name: "Expert" },
  ];
  const roles = [
    {
      name: "Junior developer",
      skillLevels: [
        { skillId: 0, levelId: 0 }
      ],
    },
    {
      name: "Developer",
      skillLevels: [
        { skillId: 0, levelId: 1 }
      ],
    },
    {
      name: "Senior",
      skillLevels: [
        { skillId: 0, levelId: 2 }
      ],
    },
  ];

  describe('When current level is less than target level', () => {
    const currentSkillLevels = [0];
    const targetRoleIndex = 1;

    let output = DeficitCalculator(skills, roles, levels, currentSkillLevels, targetRoleIndex);

    it('should return same number of skills', () => {
      expect(output.length).toEqual(currentSkillLevels.length);
    });
  
    it('should return skills with names', () => {
      expect(output[0].name).toEqual(skills[0].name);
    });
  
    it('should return skills with current level name', () => {
      expect(output[0].levels.current.name).toEqual(levels[currentSkillLevels[0]].name);
    });
  
    let getCurrentSkillLevel = (index, currentSkillLevels) => {
      return currentSkillLevels[index];
    }
  
    it('should return skills with deficits', () => {
      const skillIndex = 0;
      
      const currentSkillLevelIndex = getCurrentSkillLevel(skillIndex, currentSkillLevels);
      const targetSkillLevelLevel = getTargetSkillLevel(roles,targetRoleIndex, skillIndex);
  
      const deficitDist = targetSkillLevelLevel - currentSkillLevelIndex;
      expect(output[skillIndex].levels.deficit.length).toEqual(deficitDist);
    })
  
    
    it('should return skills with deficit examples', () => {
  
      let expectedDeficits = 
        [
          {
            name: 'Working',
            examples: [ 'Working example1', 'Working example2' ],
            id: 1
          }
        ]
      expect(output[0].levels.deficit).toEqual(expectedDeficits);
    })
    
  })

  describe('Current skill level is several levels lower than target level', () => {
    const skillIndex = 0;
    const currentLevel = 0;
    const currentSkillLevels = [currentLevel];

    const targetRoleIndex = 2;
    const targetSkillLevel = getTargetSkillLevel(roles,targetRoleIndex, skillIndex);

    const difference=targetSkillLevel-currentLevel;

    let output = DeficitCalculator(skills, roles, levels, currentSkillLevels, targetRoleIndex);

    it('there should be the right number of levels difference', () => {
      expect(output[skillIndex].levels.deficit.length).toEqual(difference);
    })
    it('there the levels should be correct', () => {
      expect(output[skillIndex].levels.deficit[0].name).toEqual('Working');
      expect(output[skillIndex].levels.deficit[1].name).toEqual('Practitioner');
    })
  })

  describe('Current skill level is higher than target level', () => {
    const targetRoleIndex = 1;
    const higherSkillLevel = roles[targetRoleIndex].skillLevels[0].levelId+1;
    const currentSkillLevels = [higherSkillLevel];

    let output = DeficitCalculator(skills, roles, levels, currentSkillLevels, targetRoleIndex);

    it('there should be no deficit', () => {
      expect(output[0].levels.deficit.length).toEqual(0);
    })
  })

  describe('Current skill level is same as target level', () => {
    const targetRoleIndex = 1;
    const sameLevel = roles[targetRoleIndex].skillLevels[0].levelId;
    const currentSkillLevels = [sameLevel];

    let output = DeficitCalculator(skills, roles, levels, currentSkillLevels, targetRoleIndex);

    it('there should be no deficit', () => {
      expect(output[0].levels.deficit.length).toEqual(0);
    })
  })
})