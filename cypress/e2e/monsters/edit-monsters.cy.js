/// <reference types="cypress" />

import {homePage} from '../../support/pages/home';
import monster from '../../src/api/payloads/monsters-payload';

describe('delete monsters', () => {
    beforeEach(() => {
        homePage.open('/');
        homePage.fillMonsterForm(monster);
        homePage.createMonster();
        homePage.assertMonsterAdded();
    });

    it('should delete monster added', () => {
        homePage.deleteMonster();
        homePage.assertMonsterDeleted();
        homePage.monsterCard.should('not.exist');
    });
});
