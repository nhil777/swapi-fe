'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '#/components/Button';
import Card from '#/components/Card';
import CardContentCentered from '#/components/CardContentCentered';
import Container from '#/components/Container';
import Header from '#/components/Header';
import MovieDetails from '#/components/MovieDetails';
import PersonDetails from '#/components/PersonDetails';
import type { DetailsResult } from '#/lib/types';

export default function Page() {
  const router = useRouter();
  const { details } = useParams();
  const [detailsResult, setDetailsResult] = useState<DetailsResult>({});
  const [isLoading, setIsLoading] = useState(true);

  const [type, resourceId] = details;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/details/${type}/${resourceId}`,
        );

        setDetailsResult(response.data);
      } catch (error) {
        console.error(error);

        alert('Something went wrong. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Card customClass="md:max-w-[800px] md:w-[800px]">
          {isLoading ? (
            <CardContentCentered>Loading...</CardContentCentered>
          ) : (
            <>
              {type === 'people' ? (
                <PersonDetails person={detailsResult} />
              ) : (
                <MovieDetails movie={detailsResult} />
              )}

              <div className="mt-[38px] w-[250px]">
                <Button onClick={() => router.push('/')} type="button">
                  Back to Search
                </Button>
              </div>
            </>
          )}
        </Card>
      </Container>
    </>
  );
}
