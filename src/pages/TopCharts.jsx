import axios from "axios";

import { useSelector } from "react-redux";
import { Error, Loader } from "../components";
import SongCard from "../components/SongCard";
import { useGetTopWorldChartsQuery } from "../redux/services/shazamCore";

const TopCharts = () => {
  const { data, isFetching, error } = useGetTopWorldChartsQuery();

  if (isFetching) <Loader title="Loading Songs Around You" />;

  if (error) <Error />;
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Charts
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, idx) => (
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

export default TopCharts;
