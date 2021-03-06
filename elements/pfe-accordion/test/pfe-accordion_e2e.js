const element = require("../package.json").pfelement.elementName;

describe(element, () => {
  let accordion;

  before(() => {
    browser.url(`/elements/${element}/demo`);

    accordion = $(element);
    accordion.$(function() {
      this.toggle(0);
    });
    browser.pause(1000);
  });

  it("should take a screenshot", () => {
    browser.saveScreen(element);
  });

  it("should compare to the baseline", () => {
    expect(browser.checkScreen(element)).toBeLessThan(1.25);
  });
});