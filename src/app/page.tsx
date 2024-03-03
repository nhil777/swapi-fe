'use client';

import { useState } from 'react';
import Button from '#/components/Button';
import Card from '#/components/Card';
import CardContent from '#/components/CardContent';
import CardContentCentered from '#/components/CardContentCentered';
import CardDivider from '#/components/CardDivider';
import CardTitle from '#/components/CardTitle';
import Container from '#/components/Container';
import Header from '#/components/Header';
import SearchForm from '#/components/SearchForm';

export default function Page() {
  const [searchResults, setSearchQueryResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onResult = (results) => {
    setSearchQueryResults(results);

    console.log('results', results);
  };

  const resultsRender = () => {
    return searchResults.map((result) => (
      <div key={result.id}>
        <div className="my-[17px] flex items-center justify-between">
          <h2 className="font-bold">{result.name}</h2>
          <div className="w-[134px]">
            <Button customClass="m-0" type="button">
              See Details
            </Button>
          </div>
        </div>

        <CardDivider />
      </div>
    ));
  };

  return (
    <>
      <Header />

      <Container>
        <Card customClass="h-[272px]">
          <CardContent>
            <SearchForm
              isLoading={isLoading}
              onLoadingChange={setIsLoading}
              onResult={onResult}
            />
          </CardContent>
        </Card>
        <Card customClass="md:w-[582px] md:h-[582px]">
          <CardTitle title="Results" />

          <CardContent>
            {isLoading ? (
              <CardContentCentered>Searching...</CardContentCentered>
            ) : searchResults.length === 0 ? (
              <CardContentCentered>
                There are zero matches. Use the form to search for People or
                Movies.
              </CardContentCentered>
            ) : (
              resultsRender()
            )}
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
