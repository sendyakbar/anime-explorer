import { useGetAnimeByIdQuery } from "../../../store/api/animeApi";
import { Props } from "../types";
import { useAnimation } from "./useAnimation";

export const useAnimeDetail = ({ route }: Props) => {
  const {
    data,
    error,
    isLoading,
  } = useGetAnimeByIdQuery(route.params);
  const anime = data?.data
  const animation = useAnimation()

  return {
    anime,
    error,
    isLoading,
    animation,
  }
}

export type UseAnimeDetailContext = ReturnType<typeof useAnimeDetail>