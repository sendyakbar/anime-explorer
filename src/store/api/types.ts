export type Anime = {
  mal_id: number;
  title: string;
  title_english?: string;
  title_japanese?: string;
  synopsis: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  score: number;
  episodes: number;
  status: string;
  year: number;
  genres: Array<{
    mal_id: number;
    name: string;
  }>;
}

export type AnimeListResponse = Anime[]

export type AnimeDetailRequest = {
  animeId: number
}