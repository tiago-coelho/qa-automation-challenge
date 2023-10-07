/// <reference types="cypress" />

import {homePage} from '../../support/pages/home';
import {monster, defaultMonster} from '../../src/api/payloads/monsters-payload';

describe('monster app', () => {
    beforeEach(() => {
        homePage.open('/');
    });

    it('should add a new monster', () => {
        const newMonster = {...monster};

        homePage.fillMonsterForm(newMonster);
        homePage.createMonster();

        homePage.assertMonsterAdded();
        homePage.monsterCard.should('be.visible');
    });

    it("should show an alert when monster doesn't have name", () => {
        const newMonster = {...monster, name: ''};
        homePage.fillMonsterForm(newMonster);
        homePage.createMonster();
        homePage.requiredFieldsAlert.should('contain.text', 'All fields are required');
        homePage.monsterCard.should('not.exist');
    });

    it("should show an alert when monster doesn't have hp", () => {
        const newMonster = {...monster, hp: ''};

        homePage.fillMonsterForm(newMonster);
        homePage.createMonster();
        homePage.requiredFieldsAlert.should('contain.text', 'All fields are required');
        homePage.monsterCard.should('not.exist');
    });

    it("should show an alert when monster doesn't have attack", () => {
        const newMonster = {...monster, attack: ''};

        homePage.fillMonsterForm(newMonster);
        homePage.createMonster();
        homePage.requiredFieldsAlert.should('contain.text', 'All fields are required');
        homePage.monsterCard.should('not.exist');
    });
    it("should show an alert when monster doesn't have defense", () => {
        const newMonster = {...monster, defense: ''};

        homePage.fillMonsterForm(newMonster);
        homePage.createMonster();
        homePage.requiredFieldsAlert.should('contain.text', 'All fields are required');
        homePage.monsterCard.should('not.exist');
    });
    it("should show an alert when monster doesn't have speed", () => {
        const newMonster = {...monster, speed: ''};

        homePage.fillMonsterForm(newMonster);
        homePage.createMonster();
        homePage.requiredFieldsAlert.should('contain.text', 'All fields are required');
        homePage.monsterCard.should('not.exist');
    });

    it('should show an alert when monster has attributes equal 0', () => {
        const newMonster = {...defaultMonster};

        homePage.fillMonsterForm(newMonster);
        homePage.requiredFieldsAlert.should('contain.text', 'Please enter a valid number');
        homePage.monsterCard.should('not.exist');
    });

    it('should show an alert when monster has float attributes', () => {
        const newMonster = {...monster, speed: '50.35'};

        homePage.fillMonsterForm(newMonster);
        homePage.requiredFieldsAlert.should('contain.text', 'Please enter a valid number');
        homePage.monsterCard.should('not.exist');
    });

    it('should show an alert when monster has attributes equal 0', () => {
        const newMonster = {...monster, hp: '0', attack: '0', defense: '0', speed: '0'};

        homePage.fillMonsterForm(newMonster);
        homePage.requiredFieldsAlert.should('contain.text', 'Please enter a valid number');
        homePage.monsterCard.should('not.exist');
    });

    it('should show an alert when monster has attributes higher than 100', () => {
        const newMonster = {...monster, speed: '101'};

        homePage.fillMonsterForm(newMonster);
        homePage.requiredFieldsAlert.should('contain.text', 'Please enter a valid number');
        homePage.monsterCard.should('not.exist');
    });

    it('should add monster when it has attributes equal 100', () => {
        const newMonster = {...monster, speed: '100'};

        homePage.fillMonsterForm(newMonster);
        homePage.createMonster();

        homePage.assertMonsterAdded();
        homePage.monsterCard.should('be.visible');
    });

	it('should favorite a monster', () => {
        const newMonster = {...monster};

        homePage.fillMonsterForm(newMonster);
        homePage.createMonster();

        homePage.assertMonsterAdded();
        homePage.monsterCard.should('be.visible');
		homePage.favoriteMonster();
		homePage.favoriteMonsterIcon.should('have.attr', 'style', 'color: red;');

    });

	it('new monster should have favorite color black with 0.6 transparency', () => {
        const newMonster = {...monster};

        homePage.fillMonsterForm(newMonster);
        homePage.createMonster();

        homePage.assertMonsterAdded();
        homePage.monsterCard.should('be.visible');
		homePage.favoriteMonsterIcon.should('have.attr', 'style', 'color: rgba(0, 0, 0, 0.6);');

    });
});
