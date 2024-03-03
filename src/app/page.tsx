'use client';

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
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const renderSearchResults = () => {
    return searchResults.map((result) => (
      <li key={result.id}>
        <div className="my-[17px] flex items-center justify-between">
          <h2 className="font-bold">{result.name}</h2>
          <div className="w-[134px]">
            <Button customClass="m-0" type="button">
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

          {isLoading ? (
            <CardContentCentered>Searching...</CardContentCentered>
          ) : searchResults.length === 0 ? (
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
