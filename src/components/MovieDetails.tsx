import React from 'react';
import CardDivider from './CardDivider';
import CardTitle from './CardTitle';

export default function MovieDetails({ movie }) {
  return (
    <>
      <CardTitle title={movie.title} />

      <div>
        <h4 className="mt-[30px] text-sm font-bold">Opening Crawl</h4>
        <CardDivider />

        <p className="mt-[10px]">{movie.opening_crawl}</p>
      </div>
    </>
  );
}
