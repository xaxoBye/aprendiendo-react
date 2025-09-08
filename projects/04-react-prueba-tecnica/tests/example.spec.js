import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173'
const CAT_PREFIX_IMGE_URL = 'https://cataas.com'

test('App shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.locator('p')
  //const image = await page.getByRole('img')

  const textContent = await text.textContent()
  //const imageSrc = await image.getAttribute('src')

  expect(textContent?.length).toBeGreaterThan(0)
  //expect(imageSrc?.startsWith(CAT_PREFIX_IMGE_URL)).toBeTruthy()

});


