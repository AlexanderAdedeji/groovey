import axios from "axios";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { Error, Loader } from "../components";
import SongCard from "../components/SongCard";
import { useGetSongsBySearchQuery } from "../redux/services/shazamCore";

const Search = () => {
  const { searchTerm } = useParams();

  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  const songs = data?.tracks?.hits?.map((song) => song.track);

  console.log(songs);
  if (isFetching) <Loader title="Loading Songs Around You" />;

  if (error) <Error />;
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing Result for <span className="font-black">{searchTerm}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, idx) => (
          <SongCard
            key={song.key}
            song={song}
            i={idx}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
