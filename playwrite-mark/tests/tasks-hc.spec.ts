import { test, expect } from "@playwright/test";
import { url } from "../apps/constants";
import { faker } from '@faker-js/faker';

test("deve cadastrar nova tarefa", async ({ page, request }) => {
	//Se tenho uma nova tarefa
	const valueInput = 'faker.lorem.words()';
	await request.delete(`http://localhost:3333/helper/tasks/${valueInput}`);

	//e estou na página principal
	await page.goto(url);

	//quando cadastro a tarefa
	const inputTaskName = page.locator('input[class*=listInputNewTask]');
	await inputTaskName.fill(valueInput);
	await page.click('css=button >> text=Create');

	//ela deve aparecer em lista
	const target = page.locator(`css=.task-item p >> text=${valueInput}`);
	await target.isVisible();

});
