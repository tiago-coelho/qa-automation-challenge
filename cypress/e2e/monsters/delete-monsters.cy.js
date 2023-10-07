/// <reference types="cypress" />

import {homePage} from '../../support/pages/home';
import { monster } from '../../src/api/payloads/monsters-payload';
import {monsterService} from '../../src/api/monsters';

describe('delete monsters', () => {
    beforeEach(() => {
        const newMonster = {...monster};
        homePage.open('/');
        monsterService.createMonster(newMonster);
        homePage.assertMonsterAdded();
    });

    it('should delete monster added', () => {
        homePage.deleteMonster();
        homePage.assertMonsterDeleted();
        homePage.monsterCard.should('not.exist');
    });
});
