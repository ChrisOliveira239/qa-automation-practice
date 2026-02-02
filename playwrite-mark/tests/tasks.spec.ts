import { test, expect } from "@playwright/test";
import { url } from "../apps/constants";
import { faker } from '@faker-js/faker';

test("deve cadastrar nova tarefa", async ({ page }) => {
	await page.goto(url);

	const inputTaskName = page.locator('input[class*=listInputNewTask]')
	const valueInput = faker.lorem.words()

	await inputTaskName.fill(valueInput)
	// await inputTaskName.press('Enter')
	await page.click('css=button >> text=Create')

	//await page.fill('input[class*]=listInputNewTask', 'Ler um livro de typescript')
	//await page.fill('input[type=text]', 'Ler um livro de typescript') type=text (possivel por não ter caracteres especiais)
	//await page.fill('input[placeholder="Add a new Task"]', 'Ler um livro de typescript') -> por placeholder
});
