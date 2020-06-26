const SkillSorter = (unsortedSkills) => {
  return unsortedSkills.sort((a,b) => {
    if(a.levels.deficit.length > b.levels.deficit.length) return -1;
    if(a.levels.deficit.length < b.levels.deficit.length) return 1;
    return 0;
  }); 
};

export default SkillSorter;