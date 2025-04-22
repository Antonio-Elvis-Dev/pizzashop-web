import { test, expect } from '@playwright/test';



test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up',{waitUntil:'networkidle'});
  
  await page.getByRole('textbox', { name: 'Nome do estabelecimento' }).fill('Pizza Shop')
  await page.getByRole('textbox', { name: 'Seu nome' }).fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('john@gmail.com')
  await page.getByRole('textbox', { name: 'Seu telefone' }).fill('9899889832')
  
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()
  
  const toast = page.getByText('Restaurante cadastrado com sucesso')
 await expect(toast).toBeVisible()
  
  
})
test('sign up wit error', async ({ page }) => {
  await page.goto('/sign-up',{waitUntil:'networkidle'});
  
  await page.getByRole('textbox', { name: 'Nome do estabelecimento' }).fill('Invalid Name ')
  await page.getByRole('textbox', { name: 'Seu nome' }).fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@gmail.com')
  await page.getByRole('textbox', { name: 'Seu telefone' }).fill('9899889832')
  
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()
  
  const toast = page.getByText('Erro ao cadastrar restaurante')
  await expect(toast).toBeVisible()
  
  
})

test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up',{waitUntil:'networkidle'});
  
  await page.getByRole('link', { name: 'Fazer login' }).click()
  
  expect(page.url()).toContain('/sign-in')
  
})
