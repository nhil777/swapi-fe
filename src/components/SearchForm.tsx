import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import type { SearchResults, SearchType } from '#/lib/types';
import Button from './Button';
import Input from './Input';
import RadioInput from './RadioInput';

type Props = {
  onSearch: (results: SearchResults) => void;
  isLoading: boolean;
  onLoadingChange: (isLoading: boolean) => void;
};

export default function SearchForm({
  onSearch,
  isLoading,
  onLoadingChange,
}: Props) {
  const [searchType, setSearchType] = useState<SearchType>('people');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchType(e.target.value as SearchType);
  };

  const handleSearchQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

      <div className="mt-3.5 flex">
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
        customClass="mt-3.5"
        type="submit"
        disabled={searchQuery.length === 0}
        onClick={handleSubmit}
      >
        {isLoading ? 'Searching...' : 'Search'}
      </Button>
    </form>
  );
}
