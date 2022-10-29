import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => {
  console.log(data)
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Related Songs</h1>
      <div className="mt-6 w-full flex flex-col">
        {data.map((song, i) => (
          <SongBar
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
            artistId={artistId}
            key={`${song.key}-${artistId}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedSongs;
