
import YAML from 'yamljs';

async function getJsonFromUrl(url){
  let response = await fetch(url);
  let json = await response.json();
  return json;
}

export async function getSkills(url){

  let response = await fetch(url);
  let skills = await YAML.parse(response.text());
  return skills;
};

export async function getRoles(url){
  return getJsonFromUrl(url);
};

export async function getLevels(url){
  return getJsonFromUrl(url);
};



