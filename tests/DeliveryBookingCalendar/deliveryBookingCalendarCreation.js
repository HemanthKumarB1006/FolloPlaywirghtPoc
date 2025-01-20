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

    test('Verify user can Creat a Delivery Calendar Booking', async ({ page }) => {
        await page.click(locators.SettingDropdown);
        await page.mouse.wheel(0, 1500);
        await page.click(locators.clickALLBookings);
        await page.click(locators.clickDeliveryBookings);
        await page.click(locators.clickCreateDeliveryBooking); 
        const baseText = testData.Delivery.Delivery.DeliveryInput.deliveryDescription;
        console.log(`Base text from testData: ${baseText}`);
        const generatedDeliveryName = await typeWithRandomNumber(page, locators.enterDeliveryDescription, baseText);
        console.log("Generated Gate Name: ", generatedDeliveryName);
        const generateFutureDate = () => {
            const today = new Date(); // Get the current date
            today.setDate(today.getDate() + 2); // Add 2 days to the current date
        
            // Format the date as MM/dd/YYYY
            const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
            const day = String(today.getDate()).padStart(2, '0');
            const year = today.getFullYear();
        
            return `${month}/${day}/${year}`;
        };
        
        // Example usage
        const futureDate = generateFutureDate();
        console.log(futureDate);
        await page.fill(locators.clickDeliveryDate,futureDate);
        await page.click(locators.selectGate);
        await page.keyboard.press('ArrowDown'); 
        await page.keyboard.press('Enter');
        await page.click(locators.selectEquipment)
        await page.keyboard.press('ArrowDown'); 
        await page.keyboard.press('Enter');
        await page.click(locators.enterFromTimeHH);
        await page.press(locators.enterFromTimeHH, 'Control+A');
        await page.press(locators.enterFromTimeHH, 'Backspace');
        await page.fill(locators.enterFromTimeHH,testData.Delivery.DeliveryInput.fromTimeHH);
        await page.click(locators.enterToTimeHH);
        await page.press(locators.enterToTimeHH, 'Control+A');
        await page.press(locators.enterToTimeHH, 'Backspace');
        await page.fill(locators.enterToTimeHH,testData.Delivery.DeliveryInput.toTimeHH);

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

    });