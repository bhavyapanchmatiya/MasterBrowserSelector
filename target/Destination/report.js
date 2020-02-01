$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/FeatureFile/a.feature");
formatter.feature({
  "line": 2,
  "name": "Registered User and Guest User can buy product.",
  "description": "",
  "id": "registered-user-and-guest-user-can-buy-product.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@NopCommerce"
    }
  ]
});
formatter.before({
  "duration": 18301262700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Registered User can buy any product",
  "description": "",
  "id": "registered-user-and-guest-user-can-buy-product.;registered-user-can-buy-any-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User should be able to complete registration successfully",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User selects the product",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User fill in the payment details",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should see the confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userShouldBeAbleToCompleteRegistrationSuccessfully()"
});
formatter.result({
  "duration": 8597769401,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsTheProduct()"
});
formatter.result({
  "duration": 11749140899,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userFillInThePaymentDetails()"
});
formatter.result({
  "duration": 8828324999,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSeeTheConfirmationMessage()"
});
formatter.result({
  "duration": 77766200,
  "status": "passed"
});
formatter.after({
  "duration": 163400,
  "status": "passed"
});
formatter.before({
  "duration": 12837717001,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Guest User should Be able to buy product.",
  "description": "",
  "id": "registered-user-and-guest-user-can-buy-product.;guest-user-should-be-able-to-buy-product.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@test2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User selects the product",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "click continue as guest.",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User fill in the payment details with name",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User should see the confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userSelectsTheProduct()"
});
formatter.result({
  "duration": 12245125701,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickContinueAsGuest()"
});
formatter.result({
  "duration": 4408787400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userFillInThePaymentDetailsWithName()"
});
formatter.result({
  "duration": 9684711099,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSeeTheConfirmationMessage()"
});
formatter.result({
  "duration": 81114300,
  "status": "passed"
});
formatter.after({
  "duration": 46100,
  "status": "passed"
});
});