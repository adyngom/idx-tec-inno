import { HttpParams } from "@angular/common/http"

export interface Media {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date?: string
  first_air_date?: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number,
  viewTransitionName?: string
  tagline?: string
  name?: string
  media_type?: string
}

export interface API_IMGS_PATH {
  backdrop_path: string;
  poster_path: string;
}

export enum CollectionType {
  now_playing = 'now_playing',
  popular = 'popular',
  top_rated = 'top_rated',
  upcoming = 'upcoming',
}

export enum PageType {
  movie = 'movie',
  tv = 'tv',
  person = 'person',
  genre = 'genre',
}

export interface PageParams extends HttpParams, Record<string, any> {
  type: PageType;
  id: string | number;
}

export interface ListParams extends HttpParams, Record<string, any> {
  type: PageType;
  collection: CollectionType;
  page?: number;
  language?: 'en' | 'fr' | 'es';
}

export interface Genre {
  id?: number;
  name?: string;
}

export interface ProductionCompany {
  id?: number;
  logo_path?: string;
  name?: string;
  origin_country?: string;
}

export interface ProductionCountry {
  iso_3166_1?: string;
  name?: string;
}

export interface SpokenLanguage {
  iso_639_1?: string;
  name?: string;
}

export interface MovieDetails {
  adult?: boolean;
  backdrop_path?: string | null;
  belongs_to_collection?: any;
  budget?: number;
  genres?: Genre[];
  homepage?: string | null;
  id?: number;
  imdb_id?: string | null;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string | null;
  production_companies?: ProductionCompany[];
  production_countries?: ProductionCountry[];
  release_date?: string;
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: SpokenLanguage[];
  status?: string;
  tagline?: string | null;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  viewTransitionName?: string;
}
