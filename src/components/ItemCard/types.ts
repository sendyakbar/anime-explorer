export type ItemCardProps = {
  onPress: () => void
  onPressFavorite: () => void
  imageUri: string
  title: string
  score: string
  episodes: string
  isFavorite?: boolean
}