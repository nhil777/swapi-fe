export interface Movie {
  id: number;
  title: string;
  opening_crawl: string;
}

export interface Person {
  id: number;
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
}

export interface SearchResults {
  type: SearchType;
  results: (Movie | Person)[];
}

export type DetailsResult = Movie | Person;

export type SearchType = 'people' | 'movies';
