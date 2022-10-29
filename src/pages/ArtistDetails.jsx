import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";

const ArtistDetails = () => {
  const dispatch = useDispatch();
  const { id: artistId } = useParams();
  console.log(artistId);

  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery({ artistId });

  console.log(artistData);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  if (isFetchingArtistDetails)
    return <Loader title={"Searching Artists Details"} />;

  if (error) return <Error />;

  // const handlePlayClick = (song, i) => {
  //   dispatch(
  //     setActiveSong({
  //       song,
  //       data,
  //       i,
  //     })
  //   );
  // };
  // const handlePauseClick = () => {
  //   dispatch(playPause(false));
  // };
  return (
    <div className="flex- flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />
      <RelatedSongs
        data={Object.values(artistData?.songs)}
        isPlaying={isPlaying}
        activeSong={activeSong}
        artistId={artistId}
        // handlePauseClick={handlePauseClick}
        // handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default ArtistDetails;
