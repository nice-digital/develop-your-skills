const YAML = require('yamljs');
const fs = require('fs');
const fetch = require("node-fetch");

async function getJsonFromUrl(url){
  let response = await fetch(url);
  let json = await response.json();
  return json;
}

async function getSkills(url){
  
  let response = await fetch(url);
  let text = await response.text();
  let skills = YAML.parse(text);
  return skills;
};

async function getRoles(url){
  return getJsonFromUrl(url);
};

async function getLevels(url){
  return getJsonFromUrl(url);
};

function writeFile(pathToFile, contents){
  fs.writeFile(pathToFile, contents, function (err) {
    if (err) return console.log(err);
  });
}

async function getData(){

  const baseUrl = 'https://raw.githubusercontent.com/nice-digital/engineering/master/skill-framework/skills';
  const dataFolder = 'src/data/'
  
  const skillsUrl = `${baseUrl}/example-skills.yml`;
  const rolesUrl = `${baseUrl}/example-roles.json`;
  const levelsUrl = `${baseUrl}/example-levels.json`;
  const ERROR = 1;
  const SUCCESS = 0;

  try{
      
    let skills = await getSkills(skillsUrl);
    writeFile(`${dataFolder}/skills.json`, JSON.stringify(skills));

    let roles = await getRoles(rolesUrl);
    writeFile(`${dataFolder}/roles.json`, JSON.stringify(roles));

    let levels = await getLevels(levelsUrl);
    writeFile(`${dataFolder}/levels.json`, JSON.stringify(levels));
  
  }catch(error){
    console.log('There was a problem retrieving data: ' + error);
    return ERROR;
  }
  return SUCCESS;
};
console.log('Retrieving skills data...')
getData().then(() => console.log('Finished getting skills data'));



