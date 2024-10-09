// locators/loginLocators.js
 
 const loginLocators = {
  emailField: 'input[type="email"]',
  passwordField: 'input[type="password"]',
  submitButton: 'button[type="submit"]',
  SettingDropdown: 'text=" Settings "',
  clickGate: 'text="Gates"',
  clickAddNewGate: 'text=" Add New Gate "',
  enterGateInput: 'input[placeholder="Gate Name*"]',
  clickEquipment: 'text="Equipment"',
  clickAddNewEquipment: 'text="New Equipment"',
  enterEquipmentName: 'input[placeholder="Equipment Name*"]',
  enterEquipmentType: 'select[placeholder="Equipment Type"]',
  enterContactName: 'select[formcontrolname="controlledBy"]',
  redirectUrlAfterLogin: 'https://test.folloit.com/calendar',
  loginPageUrl: 'https://test.folloit.com/login',
};
 
 module.exports = {...loginLocators }; 