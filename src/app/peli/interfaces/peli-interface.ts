export interface Pelis {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Result {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:        number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
    spoken_languages:  SpokenLanguage[];
}

export enum OriginalLanguage {
    En = 'en',
} 

export interface SpokenLanguage {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}
