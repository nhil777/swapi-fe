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
      <CardTitle title={person.name} />

      <div>
        <h4 className="mt-[30px] text-base font-bold">Details</h4>
        <CardDivider />

        <ul className="mt-[5px] text-sm">
          <li>Birth Year: {person.birth_year}</li>
          <li>Gender: {person.gender}</li>
          <li>Eye Color: {person.eye_color}</li>
          <li>Hair Color: {person.hair_color}</li>
          <li>Height: {person.height}</li>
          <li>Mass: {person.mass}</li>
        </ul>
      </div>
    </>
  );
}
