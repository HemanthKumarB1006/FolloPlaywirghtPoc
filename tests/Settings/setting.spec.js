
// tests/loginPOM.spec.js
 
const { test, expect } = require('@playwright/test');
const { Console } = require('console');
const locators = require('C:/Users/hemanthkumar.b/Desktop/FolloPOC/locators/loginLocators.js');
const testData = require('C:/Users/hemanthkumar.b/Desktop/FolloPOC/testData/loadTestData.js'); // Load processed test data
const assert = require('assert');
const fs = require('fs');


async function typeWithRandomNumber(page, selector, baseText) {
  console.log(`Base text passed: ${baseText}`);
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  const textToType = `${baseText}${randomNumber}`;
  console.log(`Generated text to type: ${textToType}`);
  if (!textToType) {
    throw new Error('Generated text is invalid.');
  }
  await page.fill(selector, textToType);
  return textToType;
}

test.describe('Login Page Test Scenarios', () => {
    const loginPageUrl = locators.loginPageUrl;
   
    test.beforeEach('Verify registered user can successfully log in', async ({ page }) => {
    await page.goto(loginPageUrl);
    await expect(page).toHaveURL(loginPageUrl);
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
    await page.click(locators.SettingDropdown);
    await page.mouse.wheel(0, 1500);
    await page.click(locators.clickGate);
    await page.click(locators.clickAddNewGate);
    const baseText = testData.Gate.GateInput.gateName;
    console.log(`Base text from testData: ${baseText}`);
    const generatedGateName = await typeWithRandomNumber(page, locators.enterGateInput, baseText);
    console.log("Generated Gate Name: ", generatedGateName);
    await page.click(locators.submitButton);
    const inputElement = page.locator(locators.searchGate);
    await inputElement.click();
    await page.hover(locators.hoverToSearchInput);
    await page.fill(locators.hoverToSearchInput, generatedGateName);  
    const innerText = await page.locator('td.text-center').nth(1).innerText();
    const trimmedText = innerText.trim();  // This will remove front and back whitespace
    console.log("Trimmed Inner Text: ", trimmedText);
    expect(trimmedText).toBe(generatedGateName.trim());
  });

  test('Verify that user can successfully create equipment', async ({ page }) => {
    test.setTimeout(60000);
    await page.click(locators.SettingDropdown);
    await page.mouse.wheel(0, 1500);
    await page.click(locators.clickEquipment);
    await page.click(locators.clickAddNewEquipment);
    const baseText = testData.Equipment.EquipmentInput.equipmentName;
    console.log(`Base text from testData: ${baseText}`);
    const generatedEquimentName = await typeWithRandomNumber(page, locators.enterEquipmentName, baseText);
    console.log("Generated Equipment Name: ", generatedEquimentName);
    await page.click(locators.enterEquipmentType);
    await page.selectOption(locators.enterEquipmentType, 'Backhoes').catch((error) => {
      throw new Error(`Unable to select equipment type. Error: ${error}`);
    });
    await page.click(locators.enterContactName);
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.click(locators.submitButton);
    const inputElement = page.locator(locators.searchGate);
    await inputElement.click();
    await page.hover(locators.hoverToSearchEquipmentInput);
    await page.fill(locators.hoverToSearchEquipmentInput, generatedEquimentName);  
    const innerText = await page.locator('td.text-center').nth(1).innerText();
    const trimmedText = innerText.trim();  // This will remove front and back whitespace
    console.log("Trimmed Inner Text: ", trimmedText);
    expect(trimmedText).toBe(generatedEquimentName.trim());

  })

   test('Verify that user can successfully created company', async ({ page }) => {
      test.setTimeout(60000);
      await page.click(locators.SettingDropdown);
      await page.mouse.wheel(0, 1500);
      await page.click(locators.clickcompany);
      await page.click(locators.clickNewCompany);
      await page.click(locators.modalCloseButton);
      await page.click(locators.clickNewCompany);
      const baseText = testData.Company.CompanyInput.companyName;
      console.log(`Base text from testData: ${baseText}`);
      await page.locator('input[type="text"]').nth(0).fill(baseText);
      await page.click(locators.popupCancelButton);
      await page.click(locators.buttonNo);
      await page.click(locators.popupCancelButton);
      await page.click(locators.buttonYes);
      await page.click(locators.clickNewCompany);
      // const inputElement = page.locator('input[type="text"]').nth(2);
      const generatedCompanyName = await typeWithRandomNumber(page, locators.enterCompanyName, baseText);
      console.log("Generated Company Name: ", generatedCompanyName);
      await page.locator('input[type="text"]').nth(2).fill(testData.Company.CompanyInput.addressLine1);
      await page.keyboard.press('ArrowDown'); 
      await page.keyboard.press('Enter');
      await page.click(locators.clickCompanySubmit);
      // if(locators.buttonYes)
      // {
      //   await page.click(locators.buttonYes);
      // }
      // else
      // {
      //   await page.click(locators.clickCompanySubmit);
      // }
      console.log('Company created successfully');
      await page.click(locators.clickFilterIcon);
      await page.click(locators.clickFliterCompanyName);
      await page.fill(locators.clickFliterCompanyName, generatedCompanyName);
      await page.click(locators.clickApplyButton);
      const innerText = await page.locator('div[class="my-auto"]').nth(1).innerText();
      const trimmedText = innerText.trim();  // This will remove front and back whitespace
      console.log("Trimmed Inner Text: ", trimmedText);
      expect(trimmedText).toBe(generatedCompanyName.trim());

    });

    test.skip('Verify that user can successfully created DFOW', async ({ page }) => {
      test.setTimeout(60000);
      await page.click(locators.SettingDropdown);
      await page.mouse.wheel(0, 1500);
      await page.click(locators.clickDFOW);
      await page.locator('input[type="text"]').nth(0).clear();
      await page.locator('input[type="text"]').nth(0).fill(testData.DFOW.DFOWInput.specificationSection);
      const baseText = testData.DFOW.DFOWInput.dFOWName;
      console.log(`Base text from testData: ${baseText}`);
      // const dfowName =await page.locator('input[type="text"]').nth(1);
     const generatedDFOWName = await typeWithRandomNumber(page, locators.enterDFOWName, baseText);
      await page.click(locators.clickDFOWSaveButton);
      const innerText = await page.locator('input[type="text"]').nth(1).innerText();
      const trimmedText = innerText.trim();  // This will remove front and back whitespace
      console.log("Trimmed Inner Text: ", trimmedText);
      expect(trimmedText).toBe(generatedDFOWName.trim());

      
    })
    
});




    

