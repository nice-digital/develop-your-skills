import { importSkill } from './importer';

describe('Importer ', () => {
    it('should parse yaml to json', () => {
        const ymlString = `- name: name1\n- name: name2`;
        const obj = importSkill(ymlString);
        expect(obj.length).toEqual(2);
        expect(obj[0].name).toEqual('name1');
        expect(obj[1].name).toEqual('name2');
    });
});