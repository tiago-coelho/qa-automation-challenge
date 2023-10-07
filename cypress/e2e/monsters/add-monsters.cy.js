/// <reference types="cypress" />

import { homePage } from "../../support/pages/home";
import monster from "../../src/api/payloads/monsters-payload";

describe("monster app", () => {
  beforeEach(() => {
    homePage.open("/");
  });

  it("should add a new monster", () => {
    const newMonster = { ...monster };

    homePage.createNewMonster(newMonster);
    homePage.assertMonsterAdded();
    homePage.monsterCard.should("be.visible");
  });

  it("should show an alert when monster doesn't have name", () => {
    const newMonster = { ...monster, name: "" };
    homePage.createNewMonster(newMonster);
    homePage.requiredFieldsAlert.should(
      "contain.text",
      "All fields are required"
    );
    homePage.monsterCard.should("not.exist");
  });

  it("should show an alert when monster doesn't have hp", () => {
    const newMonster = { ...monster, hp: "" };

    homePage.createNewMonster(newMonster);
    homePage.requiredFieldsAlert.should(
      "contain.text",
      "All fields are required"
    );
    homePage.monsterCard.should("not.exist");
  });

  it("should show an alert when monster doesn't have attack", () => {
    const newMonster = { ...monster, attack: "" };

    homePage.createNewMonster(newMonster);
    homePage.requiredFieldsAlert.should(
      "contain.text",
      "All fields are required"
    );
    homePage.monsterCard.should("not.exist");
  });
  it("should show an alert when monster doesn't have defense", () => {
    const newMonster = { ...monster, defense: "" };

    homePage.createNewMonster(newMonster);
    homePage.requiredFieldsAlert.should(
      "contain.text",
      "All fields are required"
    );
    homePage.monsterCard.should("not.exist");
  });
  it("should show an alert when monster doesn't have speed", () => {
    const newMonster = { ...monster, speed: "" };

    homePage.createNewMonster(newMonster);
    homePage.requiredFieldsAlert.should(
      "contain.text",
      "All fields are required"
    );
    homePage.monsterCard.should("not.exist");
  });
});
