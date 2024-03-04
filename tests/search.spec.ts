import { test, expect } from '@playwright/test';

test('search form rendered', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('[test-id=form-title]')).toHaveText(
    'What are you searching for?',
  );
});

test('user can search people', async ({ page }) => {
  const person = {
    id: 20,
    name: 'Yoda',
  };

  await page.goto('/');

  await page.locator('[name=search-query]').fill(person.name);

  await page.locator('[type=submit]').click();

  await expect(page.locator(`[test-id=result-${person.id}]`)).toBeVisible();

  await expect(
    page.locator(`[test-id=resource-label-${person.id}]`),
  ).toHaveText(person.name);
});

test('user can open person details', async ({ page }) => {
  const person = {
    id: 20,
    name: 'Yoda',
  };

  await page.goto('/');

  await page.locator('[name=search-query]').fill(person.name);

  await page.locator('[type=submit]').click();

  await expect(page.locator(`[test-id=result-${person.id}]`)).toBeVisible();

  await page.locator(`[test-id=see-details-${person.id}]`).click();

  await page.waitForURL(`/details/people/${person.id}`);

  await expect(page.locator('[test-id=card-title]')).toHaveText(person.name);
});

test('user can search movies', async ({ page }) => {
  const movie = {
    id: 5,
    title: 'Attack of the Clones',
  };

  await page.goto('/');

  await page.locator('[test-id=search-type-movies]').click();

  await page.locator('[name=search-query]').fill(movie.title);

  await page.locator('[type=submit]').click();

  await expect(page.locator(`[test-id=result-${movie.id}]`)).toBeVisible();

  await expect(page.locator(`[test-id=resource-label-${movie.id}]`)).toHaveText(
    movie.title,
  );
});

test('user can open movie details', async ({ page }) => {
  const movie = {
    id: 5,
    title: 'Attack of the Clones',
  };

  await page.goto('/');

  await page.locator('[test-id=search-type-movies]').click();

  await page.locator('[name=search-query]').fill(movie.title);

  await page.locator('[type=submit]').click();

  await expect(page.locator(`[test-id=result-${movie.id}]`)).toBeVisible();

  await page.locator(`[test-id=see-details-${movie.id}]`).click();

  await page.waitForURL(`/details/movies/${movie.id}`);

  await expect(page.locator('[test-id=card-title]')).toHaveText(movie.title);
});
