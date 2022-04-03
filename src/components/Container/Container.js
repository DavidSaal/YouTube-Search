import React, { useEffect, useState } from "react";
import songs from "../../DB/songs.json";
import PlayYoutubeModal from "../PlayYoutubeModal";
import SongsList from "../SongsList";
import SearchBar from "../SearchBar";
import "./Container.css";

const Container = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const [searchedSongs, setSearchedSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState({});

  const handleOnSearch = () => {
    setSearchedSongs(
      songs.filter((song) =>
        song.name.toLowerCase().includes(searchedValue.toLowerCase())
      )
    );
  };

  useEffect(() => {
    !searchedValue && setSearchedSongs([]);
    const delayDebounceFn = setTimeout(() => {
      searchedValue && handleOnSearch();
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchedValue]);

  return (
    <div className="pt-5">
      <PlayYoutubeModal
        selectedSong={selectedSong}
        setSelectedSong={setSelectedSong}
      />
      <div className="container p-5 shadow-sm">
        <div className="logo"></div>
        <div className="text-center banner-search d-flex row justify-content-center">
          <h1 className="pt-5">Youtube Search</h1>
          <p className="py-2">Get your music fast and easily</p>
          <SearchBar
            searchedValue={searchedValue}
            setSearchedValue={setSearchedValue}
          />
          <SongsList
            songsList={searchedSongs}
            setSelectedSong={setSelectedSong}
            toggle="on"
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
