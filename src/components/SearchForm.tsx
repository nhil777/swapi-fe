'use client';

import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import RadioInput from './RadioInput';

export default function SearchForm() {
  const [searchType, setSearchType] = useState('People');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchType(e.target.value);
  };

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('search type', searchType);
    console.log('search query', searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p className="mb-[30px] font-semibold">What are you searching for?</p>

        <div className="flex">
          <RadioInput
            name="search-type"
            label="People"
            value="People"
            checked={searchType === 'people'}
            onChange={handleSearchTypeChange}
          />
          <RadioInput
            name="search-type"
            label="Movies"
            value="movies"
            checked={searchType === 'movies'}
            onChange={handleSearchTypeChange}
          />
        </div>

        <Input
          name="search-query"
          placeholder="e.g. Chewbacca, Yoda, Boba Fett"
          autoFocus={true}
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />

        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}
