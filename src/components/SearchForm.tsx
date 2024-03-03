'use client';

import { useState } from 'react';
import axios from 'axios';
import Button from './Button';
import Input from './Input';
import RadioInput from './RadioInput';

type Props = {
  onSearch: (results: any) => void;
  isLoading: boolean;
  onLoadingChange: (isLoading: boolean) => void;
};

export default function SearchForm({
  onSearch,
  isLoading,
  onLoadingChange,
}: Props) {
  const [searchType, setSearchType] = useState('people');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchType(e.target.value);
  };

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchQuery.trim()) return; // Prevent empty search query

    onLoadingChange(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/search/${searchType}?query=${searchQuery}`,
      );

      onSearch({
        type: searchType,
        results: response.data,
      });
    } catch (error) {
      console.error(error);

      alert('Something went wrong. Please try again later.');
    } finally {
      onLoadingChange(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="font-semibold">What are you searching for?</p>

      <div className="mt-[30px] flex">
        <RadioInput
          disabled={isLoading}
          name="search-type"
          label="People"
          value="people"
          checked={searchType === 'people'}
          onChange={handleSearchTypeChange}
        />
        <RadioInput
          disabled={isLoading}
          name="search-type"
          label="Movies"
          value="movies"
          checked={searchType === 'movies'}
          onChange={handleSearchTypeChange}
        />
      </div>

      <Input
        disabled={isLoading}
        name="search-query"
        placeholder="e.g. Chewbacca, Yoda, Boba Fett"
        autoFocus={true}
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />

      <Button
        customClass="mt-[30px]"
        type="submit"
        disabled={searchQuery.length === 0}
      >
        {isLoading ? 'Searching...' : 'Search'}
      </Button>
    </form>
  );
}
