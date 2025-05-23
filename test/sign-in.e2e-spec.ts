import { test, expect } from '@playwright/test';

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in',{waitUntil:'networkidle'});

  await page.getByLabel('Seu e-mail').fill('johndoe@gmail.com')

  await page.getByRole('button', { name: 'Acessar painel' }).click()


  const toast = page.getByText('Enviamos um link de autenticação para seu e-mail.')
  expect(toast).toBeVisible()


})
test('sign in with wron credentials', async ({ page }) => {
  await page.goto('/sign-in',{waitUntil:'networkidle'});

  await page.getByLabel('Seu e-mail').fill('wrong@gmail.com')

  await page.getByRole('button', { name: 'Acessar painel' }).click()


  const toast = page.getByText('Credenciais inválidas')
  expect(toast).toBeVisible()
  
})


test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in',{waitUntil:'networkidle'});
  
  await page.getByRole('link', { name: 'Novo Estabelecimento' }).click()
  
  expect(page.url()).toContain('/sign-up')
  
})






