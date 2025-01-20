// @ts-check
const { test, expect } = require('@playwright/test');
const { TIMEOUT } = require('dns/promises');

test('test', async ({ page }) => {
  await page.goto('https://test.folloit.com/login');
  await page.getByPlaceholder('Email address').fill('hemanth1006@yopmail.com');
  await page.getByPlaceholder('Password').fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'All Bookings' }).click();
  await page.getByRole('link', { name: 'Delivery Bookings', exact: true }).waitFor({ state: 'visible', timeout: 50000 });
  const element = await page.getByRole('link', { name: 'Delivery Bookings', exact: true });
  await element.click();
  await page.getByRole('button', { name: 'Create New' }).click();
  await page.getByPlaceholder('Enter Description').fill('For Testing');
  await page.getByText('Definable Feature Of Work (').click();
  await page.getByRole('combobox').first().selectOption('461');
  await page.locator('span').filter({ hasText: 'Equipment' }).nth(2).click();
  await page.getByText('Select All', { exact: true }).click();
  await page.locator('#deliverydetails-form3 div').filter({ hasText: 'Equipment*Mobile crane xNon' }).nth(1).click();
  await page.getByPlaceholder('Picking From').fill('Gate 1');
  await page.getByPlaceholder('Picking To').fill('Gate 2');
  await page.getByPlaceholder('Origination Address').fill('Chennai');
  await page.getByText('Chennai International Airport').click();
  await page.locator('span').filter({ hasText: 'Choose Vehicle Type' }).first().click();
  await page.getByText('Passenger Car').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByPlaceholder('Delivery Date *').click();
  await page.getByText('3', { exact: true }).nth(1).click();
  await page.getByRole('button', { name: 'Submit' }).click();
});

