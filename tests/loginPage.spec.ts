import { test, expect } from '@playwright/test';
import { LoginPage } from '/Users/sj/Documents/Documentweb/tests/pages/loginPage.ts';

test("Homepage", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterPhoneNumber("9789505880");
    await loginPage.clickVerify();

    // Pause for manual OTP entry
    console.log('Waiting for you to manually enter OTP...');
    await page.pause();

    await loginPage.verifyprofile();
    await loginPage.clickOnQbank();
    await loginPage.selectForensicMedicine();
    await loginPage.selectToxicology();
    await loginPage.selectNeetPgFromDropdown();
    await loginPage.visiblebyNeetPg();
    await loginPage.visibleLiveLeaderboard();
    await loginPage.visiblePopularQbank();

}); 