import {homePage} from '../../support/pages/home';
import {monster, defaultMonster} from '../../src/api/payloads/monsters-payload';
import {monsterService} from '../../src/api/monsters';

describe('Monster App Tests', () => {
    beforeEach(() => {
        homePage.open('/');
    });

    it.only('should successfully add a new monster', () => {
        const newMonster = {...monster};
        monsterService.createMonster(newMonster);
        homePage.assertMonsterAdded();
        homePage.monsterCard.should('be.visible');
    });

    it('should favorite a monster and change its icon color to red', () => {
        const newMonster = {...monster};
        monsterService.createMonster(newMonster);
        homePage.assertMonsterAdded();
        homePage.monsterCard.should('be.visible');
        homePage.favoriteMonster();
        homePage.favoriteMonsterIcon.should('have.attr', 'style', 'color: red;');
    });

    it('should set the favorite monster icon color to black with 0.6 transparency', () => {
        const newMonster = {...monster};
        monsterService.createMonster(newMonster);
        homePage.assertMonsterAdded();
        homePage.monsterCard.should('be.visible');
        homePage.favoriteMonsterIcon.should('have.attr', 'style', 'color: rgba(0, 0, 0, 0.6);');
    });

    it('should display an alert when the monster has no name', () => {
        const newMonster = {...monster, name: ''};
        monsterService.createMonster(newMonster);
        homePage.requiredFieldsAlert.should('contain.text', 'All fields are required');
        homePage.monsterCard.should('not.exist');
    });

    it('should display an alert when the monster has no HP', () => {
        const newMonster = {...monster, hp: ''};
        monsterService.createMonster(newMonster);
        homePage.requiredFieldsAlert.should('contain.text', 'All fields are required');
        homePage.monsterCard.should('not.exist');
    });

    it('should display an alert when the monster has no attack', () => {
        const newMonster = {...monster, attack: ''};
        monsterService.createMonster(newMonster);
        homePage.requiredFieldsAlert.should('contain.text', 'All fields are required');
        homePage.monsterCard.should('not.exist');
    });

    it('should display an alert when the monster has no defense', () => {
        const newMonster = {...monster, defense: ''};
        monsterService.createMonster(newMonster);
        homePage.requiredFieldsAlert.should('contain.text', 'All fields are required');
        homePage.monsterCard.should('not.exist');
    });

    it('should display an alert when the monster has no speed', () => {
        const newMonster = {...monster, speed: ''};
        monsterService.createMonster(newMonster);
        homePage.requiredFieldsAlert.should('contain.text', 'All fields are required');
        homePage.monsterCard.should('not.exist');
    });

    it('should successfully add a monster when it has attributes equal to 100', () => {
        const newMonster = {...monster, speed: '100'};
        monsterService.createMonster(newMonster);
        homePage.assertMonsterAdded();
        homePage.monsterCard.should('be.visible');
    });

    it('should display an alert when the monster has attributes equal to 0', () => {
        const newMonster = {...defaultMonster};
        homePage.fillMonsterForm(newMonster);
        homePage.requiredFieldsAlert.should('contain.text', 'Please enter a valid number');
        homePage.monsterCard.should('not.exist');
    });

    it('should display an alert when the monster has float attributes', () => {
        const newMonster = {...monster, speed: '50.35'};
        homePage.fillMonsterForm(newMonster);
        homePage.requiredFieldsAlert.should('contain.text', 'Please enter a valid number');
        homePage.monsterCard.should('not.exist');
    });

    it('should display an alert when the monster has attributes higher than 100', () => {
        const newMonster = {...monster, speed: '101'};
        homePage.fillMonsterForm(newMonster);
        homePage.requiredFieldsAlert.should('contain.text', 'Please enter a valid number');
        homePage.monsterCard.should('not.exist');
    });
});
