import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Error, Loader } from "../components";
import SongCard from "../components/SongCard";
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";

const AroundYou = () => {
  const [aroundYouState, setAroundYouState] = useState({
    country: "",
    loading: true,
  });

  //   at_46madMO2nFfiPs7rJ1eFg4qY6Mol5
  useEffect(() => {
    axios
      .get(
        ``
      )
      .then((res) => {
        console.log(res);
        setAroundYouState((prevState) => ({
          ...prevState,
          country: res?.data?.location?.country,
        }));
      })
      .catch((error) => console.log(error))
      .finally(() =>
        setAroundYouState((prevState) => ({
          ...prevState,
          loading: false,
        }))
      );
  }, [aroundYouState.country]);

  const { data, isFetching, error } = useGetSongsByCountryQuery(
    aroundYouState.country
  );

  if (isFetching && aroundYouState.loading)
    <Loader title="Loading Songs Around You" />;
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around You <span className="italic ">{aroundYouState.country}</span>
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

export default AroundYou;
