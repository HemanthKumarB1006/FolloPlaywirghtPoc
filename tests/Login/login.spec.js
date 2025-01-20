
// tests/loginPOM.spec.js
 
const { test, expect } = require('@playwright/test');
const locators = require('C:/Users/hemanthkumar.b/Desktop/FolloPOC/locators/loginLocators.js');
const testData = require('C:/Users/hemanthkumar.b/Desktop/FolloPOC/testData/loadTestData.js'); // Load processed test data
const assert = require('assert');

async function typeWithRandomNumber(page, selector, baseText) {
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  const textToType = `${baseText}${randomNumber}`;
  await page.fill(selector, textToType);
}
test.describe('Login Page Test Scenarios', () => {
    const loginPageUrl = locators.loginPageUrl;
   
    test.beforeEach('Verify registered user can successfully log in', async ({ page }) => {
    await page.goto(loginPageUrl);
    await expect(page).toHaveURL(loginPageUrl);
    // const text = await page.textContent('body');
    // assert.strictEqual(text, 'Login');
    await page.screenshot({ path: 'example.png' });
    await page.fill(locators.emailField, testData.loginTests.validUser.email);
    await page.fill(locators.passwordField, testData.loginTests.validUser.password);
    await page.click(locators.submitButton);
    await expect(page).toHaveURL(locators.redirectUrlAfterLogin).catch((error) => {
      throw new Error(`After logn user is not redirected to the correct page after login. Error: ${error}`);
    });
    });
    
    test.afterEach(async ({ page }, testInfo) => {
      // Capture a screenshot after each test
      const screenshotPath = `screenshots/${testInfo.title.replace(/\s+/g, '_')}.png`;
      await page.screenshot({ path: screenshotPath });
      console.log(`Screenshot taken for test: ${testInfo.title} - Saved to ${screenshotPath}`);
    });
    test('Verify user can add gate and equipment', async ({ page }) => {
    // await page.goto(loginPageUrl);
    await page.click(locators.SettingDropdown);
    await page.mouse.wheel(0, 1500);
    await page.click(locators.clickGate);
    await page.click(locators.clickAddNewGate);
   
    await typeWithRandomNumber(page, locators.enterGateInput, testData.Gate.GateInput.gateName);
    await page.click(locators.submitButton);
    await page.click(locators.clickEquipment);
    await page.click(locators.clickAddNewEquipment);
    // await page.fill(locators.enterEquipmentName, testData.Equipment.EquipmentInput.equipmentName);
    await typeWithRandomNumber(page, locators.enterEquipmentName, testData.Equipment.EquipmentInput.equipmentName);
    await page.click(locators.enterEquipmentType);
    await page.selectOption(locators.enterEquipmentType, 'Backhoes').catch((error) => {
      throw new Error(`Unable to select equipment type. Error: ${error}`);
    });

    await page.click(locators.enterContactName);
    await page.keyboard.press('ArrowDown'); 
    await page.keyboard.press('Enter');
    await page.click(locators.submitButton);

    test('Verify that user can successfully company', async ({ page }) => {
      await page.click(locators.SettingDropdown);
    })

  });
});
