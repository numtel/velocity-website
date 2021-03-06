Template.frontExamples.rendered = function () {
  $('.tab-pane:first').addClass('active')
  $('.nav-tabs li:first').addClass('active')
}

Template.frontExamples.helpers({
  frameworks: function () {
    return [
      {
        name: "Mocha",
        slug: "mocha",
        description: "Integration testing with mocha syntax.",
        example: "meteor add mike:mocha"
      },
      {
        name: "Jasmine",
        slug: "jasmine",
        description: "Integration and unit testing with jasmine syntax.",
        example: "meteor add sanjo:jasmine\n" +
                 "meteor add velocity:html-reporter"
      },
      {
        name: "Selenium Nightwatch",
        slug: "nightwatch",
        description: "Acceptance testing via browser automation",
        example: "meteor add clinical:nightwatch"
      }
    ];
  }
});
