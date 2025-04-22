import { expect, test } from "@playwright/test"
test('display month revenue metric', async ({page})=>{
    await page.goto('/',{waitUntil: "networkidle"})

    
    expect(page.getByText('R$ 120,00',{exact:true})).toBeVisible()
    expect(page.getByText('+17% em relação ao mês passado')).toBeVisible()    

})
test('display month orders amount metric', async ({page})=>{
    await page.goto('/',{waitUntil: "networkidle"})

    
    expect(page.getByText('60',{exact:true})).toBeVisible()
    expect(page.getByText('-10% em relação ao mês passado')).toBeVisible()    

})
test('display day orders amount metric', async ({page})=>{
    await page.goto('/',{waitUntil: "networkidle"})

    
    expect(page.getByText('20',{exact:true})).toBeVisible()
    expect(page.getByText('-5% em relação ao mês passado')).toBeVisible()    

})
test('display month canceled orders amount  metric', async ({page})=>{
    await page.goto('/',{waitUntil: "networkidle"})

    
    expect(page.getByText('10',{exact:true})).toBeVisible()
    expect(page.getByText('-5% em relação ao mês passado')).toBeVisible()    

})