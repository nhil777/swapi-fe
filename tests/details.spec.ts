import { test, expect } from '@playwright/test';

test('person details load', async ({ page }) => {
  const person = {
    id: 20,
    name: 'Yoda',
    birth_year: '896BBY',
    gender: 'male',
    eye_color: 'brown',
    hair_color: 'white',
    height: '66',
    mass: '17',
  };

  await page.goto(`/details/people/${person.id}`);

  await expect(page.locator('[test-id=card-title]')).toHaveText(person.name);

  await expect(page.locator('[test-id=person-birth_year]')).toHaveText(
    person.birth_year,
  );
  await expect(page.locator('[test-id=person-gender]')).toHaveText(
    person.gender,
  );
  await expect(page.locator('[test-id=person-eye_color]')).toHaveText(
    person.eye_color,
  );
  await expect(page.locator('[test-id=person-hair_color]')).toHaveText(
    person.hair_color,
  );
  await expect(page.locator('[test-id=person-height]')).toHaveText(
    person.height,
  );
  await expect(page.locator('[test-id=person-mass]')).toHaveText(person.mass);
});

test('movie details load', async ({ page }) => {
  const movie = {
    id: 5,
    title: 'Attack of the Clones',
    opening_crawl:
      'There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic.',
  };

  await page.goto(`/details/movies/${movie.id}`);

  await expect(page.locator('[test-id=card-title]')).toHaveText(movie.title);

  await expect(page.locator('[test-id=movie-opening_crawl]')).toBeVisible();
});
