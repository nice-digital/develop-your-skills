import YAML from 'yamljs';

export function importSkills(ymlString) {
    return YAML.parse(ymlString);
};