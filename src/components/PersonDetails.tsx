import React from 'react';
import type { Person } from '#/lib/types';
import CardDivider from './CardDivider';
import CardTitle from './CardTitle';

type Props = {
  person: Person;
};

export default function PersonDetails({ person }: Props) {
  return (
    <>
      <CardTitle testId="card-title" title={person.name} />

      <div>
        <h4 className="mt-[30px] text-base font-bold">Details</h4>
        <CardDivider />

        <ul className="mt-[5px] text-sm">
          <li>
            Birth Year:{' '}
            <span test-id="person-birth_year">{person.birth_year}</span>
          </li>
          <li>
            Gender: <span test-id="person-gender">{person.gender}</span>
          </li>
          <li>
            Eye Color:{' '}
            <span test-id="person-eye_color">{person.eye_color}</span>
          </li>
          <li>
            Hair Color:{' '}
            <span test-id="person-hair_color">{person.hair_color}</span>
          </li>
          <li>
            Height: <span test-id="person-height">{person.height}</span>
          </li>
          <li>
            Mass: <span test-id="person-mass">{person.mass}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
