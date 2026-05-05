export type Genre = {
  id: number;
  name: string;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string; // ISO date string (YYYY-MM-DD)
  softcore: boolean;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type SearchMovie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string; // could also be Date if parsed
  softcore: boolean;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TrailerResult = {
  iso_639_1: string; 
  iso_3166_1: string; 
  name: string; 
  key: string; 
  site: string; 
  size: number; 
  type: string; 
  official: boolean; 
  published_at: string; 
  id: string; 
};