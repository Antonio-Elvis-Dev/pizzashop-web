import { expect, test } from "@playwright/test";



test('update profile successfully', async ({ page }) => {
  await page.goto('/',{waitUntil:'networkidle'});
  
  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()


  await page.getByLabel('Nome').fill('John Doe')
  await page.getByLabel('Descrição').fill('Another Description')


  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso')

 await expect(toast).toBeVisible()



  await page.getByRole('button', { name: 'Close', exact: true }).click()
  
  await page.waitForTimeout(1000)
  
  
 await expect( page.getByRole('button', { name: 'John Doe', exact: true })).toBeVisible()
  
})

test('update profile with error', async ({ page }) => {
  await page.goto('/',{waitUntil:'networkidle'});
  
  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()


  await page.getByLabel('Nome').fill('Another Name')
  await page.getByLabel('Descrição').fill('Another Description')


  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Falha ao atualizar o perfl, tente novamente')

await  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close', exact: true }).click()


  await expect( page.getByRole('button', { name: 'Pizza Shop', exact: true })).toBeVisible()
  
})