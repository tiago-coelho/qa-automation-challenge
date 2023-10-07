import { homePage } from "../../support/pages/home";

export default class MonsterService {
    createMonster(newMonster) {
        homePage.fillMonsterForm(newMonster);
        homePage.createMonster();
    }
}

export const monsterService = new MonsterService();