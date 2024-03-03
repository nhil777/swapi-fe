'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '#/components/Button';
import Card from '#/components/Card';
import CardContentCentered from '#/components/CardContentCentered';
import CardDivider from '#/components/CardDivider';
import CardTitle from '#/components/CardTitle';
import Container from '#/components/Container';
import Header from '#/components/Header';
import SearchForm from '#/components/SearchForm';

export default function Page() {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState({
    type: 'people',
    results: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const renderSearchResults = () => {
    const { type, results } = searchResults;

    return results.map((result) => (
      <li key={result.id}>
        <div className="my-[17px] flex items-center justify-between">
          <h2 className="font-bold">
            {type === 'people' ? result.name : result.title}
          </h2>
          <div className="w-[134px]">
            <Button
              onClick={() => router.push(`/details/${type}/${result.id}`)}
              customClass="m-0"
              type="button"
            >
              See Details
            </Button>
          </div>
        </div>
        <CardDivider />
      </li>
    ));
  };

  return (
    <>
      <Header />

      <Container>
        <Card customClass="h-[272px]">
          <SearchForm
            isLoading={isLoading}
            onLoadingChange={setIsLoading}
            onSearch={setSearchResults}
          />
        </Card>
        <Card customClass="md:w-[582px] md:h-[582px]">
          <CardTitle title="Results" />

          <CardDivider />

          {isLoading ? (
            <CardContentCentered>Searching...</CardContentCentered>
          ) : searchResults?.results?.length === 0 ? (
            <CardContentCentered>
              There are zero matches. Use the form to search for People or
              Movies.
            </CardContentCentered>
          ) : (
            <ul>{renderSearchResults()}</ul>
          )}
        </Card>
      </Container>
    </>
  );
}
