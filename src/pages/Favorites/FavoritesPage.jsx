import { useGetMyPlaylistQuery } from '../../api/playlist'
import { useAuthSelector } from '../../auth'
import Tracklist from '../../components/Tracklist'

export default function FavoritesPage() {
  const auth = useAuthSelector()
  const { data, error, isLoading } = useGetMyPlaylistQuery({ auth })

  if (error?.status === 401) {
    console.error(error)
  }

  return (
    <Tracklist
      tracks={data}
      error={error}
      loading={isLoading}
      showAllTracksAsLiked={true}
      showSearchBar={false}
      title="Мои треки"
    />
  )
}
