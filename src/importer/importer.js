import YAML from 'yamljs';

export function importSkill(ymlString) {
    return YAML.parse(ymlString);
};