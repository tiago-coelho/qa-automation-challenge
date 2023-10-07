/// <reference types="cypress" />

import { homePage } from "../../support/pages/home";

const monster = {
  name: "QA",
  hp: "50",
  attack: "50",
  defense: "50",
  speed: "50",
};

describe("monster app", () => {
  beforeEach(() => {
    homePage.open("/");
  });

  it("should add a new monster", () => {
    homePage.createNewMonster(monster);
    homePage.assertMonsterAdded();
    homePage.monsterCard.should("be.visible");
  });
});
describe("delete monsters", () => {
  beforeEach(() => {
    homePage.open("/");
    homePage.createNewMonster(monster);
    homePage.assertMonsterAdded();
  });

  it("should delete monster added", () => {
    homePage.deleteMonster();
    homePage.assertMonsterDeleted();
    homePage.monsterCard.should("not.exist");
  });
});

describe("duplicated monsters", () => {
  beforeEach(() => {
    homePage.open("/");
    homePage.createNewMonster(monster);
    homePage.assertMonsterAdded();
  });
});
