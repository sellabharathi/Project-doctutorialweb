import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly phoneInput: Locator;
    readonly verifyButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.phoneInput = page.locator('input[name="phNo"]');
        this.verifyButton = page.getByRole('button', { name: 'Verify' });
    }

    async goto() {
        await this.page.goto("https://app.doctutorials.com/auth/login");
    }

    async enterPhoneNumber(phone: string) {
        await this.phoneInput.fill(phone);
    }

    async clickVerify() {
        await this.verifyButton.click();
    }
    async verifyprofile() {
        await this.page.getByRole('img', { name: 'Profile Picture' }).isVisible();
    }

    async clickOnQbank() {
        await this.page.getByRole('heading', { name: 'Qbank', level: 4 }).click();
    }

    async selectForensicMedicine() {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await this.page.waitForTimeout(1000);
        const forensicMedicine = this.page.getByText('Forensic Medicine', { exact: true });
        await expect(forensicMedicine).toBeVisible();
        await forensicMedicine.click();
    }

    async selectToxicology() {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await this.page.waitForTimeout(1000);
        // Try to click Toxicology if visible, otherwise click Continue
        let toxicology;
        try {
            toxicology = this.page.getByText("Toxicology4.5|46 MCQ's", { exact: true });
            await expect(toxicology).toBeVisible({ timeout: 2000 });
        } catch {
            toxicology = this.page.getByText('Continue', { exact: true });
            await expect(toxicology).toBeVisible();
        }
        await toxicology.click();
    }

    async selectNeetPgFromDropdown() {
        // Click the dropdown icon
        await this.page.locator('[role="combobox"][aria-expanded="false"]').click();
        // Select the 'NEET PG' option

        const neetPg = this.page.getByText('NEET PG', { exact: true });
        await expect(neetPg).toBeVisible();
        await neetPg.click();
    }

    async visiblebyNeetPg() {

        // Verify that the NEET PG heading is visible
        const neetPgHeading = this.page.locator('text="MCQ of the Day"');
        await expect(neetPgHeading).toBeVisible();
    }
    async visibleLiveLeaderboard() {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await this.page.waitForTimeout(1000);
        const liveLeaderboard = this.page.getByText('Live Leaderboard', { exact: true });
        await expect(liveLeaderboard).toBeVisible();
    }

    async visiblePopularQbank() {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await this.page.waitForTimeout(1000);
        const popularQbank = this.page.getByText('Popular QBank', { exact: true });
        await expect(popularQbank).toBeVisible();
    }
}