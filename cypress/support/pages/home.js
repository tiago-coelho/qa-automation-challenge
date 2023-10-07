import { BasePage } from "./base";

export class HomePage extends BasePage {
  monsterFigure(id) {
    return cy.get(`[data-testid=monster-${id}]`);
  }
  get monsterNameInput() {
    return cy.get('[data-testid="monster-name"]');
  }
  get monsterHpValueInput() {
    return cy.get('[data-testid="hp-value"]');
  }
  get monsterAttackValueInput() {
    return cy.get('[data-testid="attack-value"]');
  }
  get monsterDefenseValueInput() {
    return cy.get('[data-testid="defense-value"]');
  }
  get monsterSpeedValueInput() {
    return cy.get('[data-testid="speed-value"]');
  }
  get createMonsterButton() {
    return cy.get('[data-testid="btn-create-monster"]');
  }
  get dynamicAlertTitle() {
    return cy.get('[data-testid="dynamic-title"]');
  }
  get deleteMonsterButton() {
    return cy.get('[data-testid="btn-delete"]');
  }
  get monsterCard() {
    return cy.get('[data-testid="monster-card"]');
  }

  createNewMonster(monster) {
    this.monsterFigure("1").click();
    this.monsterNameInput.type(monster.name);
    this.monsterHpValueInput.type(monster.hp);
    this.monsterAttackValueInput.type(monster.attack);
    this.monsterDefenseValueInput.type(monster.defense);
    this.monsterSpeedValueInput.type(monster.speed);
    this.createMonsterButton.click();
  }

  deleteMonster() {
    this.deleteMonsterButton.click();
  }
  assertMonsterAdded() {
    this.dynamicAlertTitle.should("have.text", "Your Monsters");
  }
  assertMonsterDeleted() {
    this.dynamicAlertTitle.should("have.text", "There are no monsters");
  }
}

export const homePage = new HomePage();
