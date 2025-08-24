import { useGetAnimeByIdQuery } from "../../../store/api/animeApi";
import { Props } from "../types";

export const useAnimeDetail = ({ route }: Props) => {
  const {
    data,
    error,
    isLoading,
  } = useGetAnimeByIdQuery(route.params);
  const anime = data?.data

  return {
    anime,
    error,
    isLoading,
  }
}

export type UseAnimeDetailContext = ReturnType<typeof useAnimeDetail>