
export let getDeficitsForSkill = (currentSkillLevels, targetSkillLevel, deficitDist) => {
  return currentSkillLevels.slice(targetSkillLevel,targetSkillLevel+deficitDist);
};

export let getCurrentSkillLevels = (skills, skillIndex) => { 
  return skills[skillIndex].levels;
}

export let getTargetSkillLevel = (roles, targetRoleIndex, index) => {
  return roles[targetRoleIndex].skillLevels[index].levelId;
}

export const DeficitCalculator = (skills, roles, levels, currentSkillLevels, targetRoleIndex) => {
 
  let skillsToDevelop =  
    currentSkillLevels.map((currentSkillLevel,skillIndex) => {
      const targetSkillLevel = getTargetSkillLevel(roles,targetRoleIndex, skillIndex);
      const deficitDist = targetSkillLevel - currentSkillLevel;
  
      const currentLevels = getCurrentSkillLevels(skills, skillIndex);
      const deficitArray = getDeficitsForSkill(currentLevels, targetSkillLevel, deficitDist);

      return ({
        name: skills[skillIndex].name,
        levels: {
          current: {
            name: levels[currentSkillLevel]
          },
          deficit: deficitArray
        }
      })});    
  return skillsToDevelop;
}
