import { test, expect } from "@playwright/test";
import { url } from "../apps/constants";

test("webapp deve estar online", async ({ page }) => {
	await page.goto(url);
	await expect(page).toHaveTitle("Gerencie suas tarefas com Mark L");
});
