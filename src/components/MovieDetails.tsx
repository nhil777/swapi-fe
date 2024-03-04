import React from 'react';
import type { Movie } from '#/lib/types';
import CardDivider from './CardDivider';
import CardTitle from './CardTitle';

type Props = {
  movie: Movie;
};

export default function MovieDetails({ movie }: Props) {
  const formattedText = movie.opening_crawl.split('\n').map((line, index) => (
    <p className="mt-[10px]" key={index}>
      {line}
    </p>
  ));

  return (
    <>
      <CardTitle testId="card-title" title={movie.title} />

      <div>
        <h4 className="mt-[30px] text-sm font-bold">Opening Crawl</h4>
        <CardDivider />

        <div test-id="movie-opening_crawl">{formattedText}</div>
      </div>
    </>
  );
}
