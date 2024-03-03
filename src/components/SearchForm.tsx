'use client';

import { useState } from 'react';
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onLoadingChange(true);

    setTimeout(() => {
      onSearch([
        { id: 1, name: 'Biggs Darklighter', type: 'people' },
        { id: 2, name: 'Obi-Wan Kenobi', type: 'people' },
        { id: 3, name: 'Jar Jar Binks', type: 'people' },
        { id: 4, name: 'Bib Fortuna', type: 'people' },
      ]);
      onLoadingChange(false);
    }, 1000);
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
