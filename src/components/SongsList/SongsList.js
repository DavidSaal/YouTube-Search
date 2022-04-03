import React from "react";
import youtubeParser from "../../utils/utils";

const SongsList = ({ songsList, setSelectedSong, toggle }) => {
  return (
    <>
      {songsList.map((song, index) => (
        <div className="py-2" key={index}>
          <div className="bg-light border shadow-sm p-3">
            <div className="d-flex align-items-center justify-content-between text-center">
              <img
                className="shadow pointer"
                src={`https://img.youtube.com/vi/${youtubeParser(
                  song.link
                )}/mqdefault.jpg`}
                alt="song"
                onClick={() => setSelectedSong(song)}
                data-bs-toggle={toggle ? "modal" : ""}
                data-bs-target="#PlayYoutubeModal"
              />
              <div>
                <div>Name: {song.name}</div>
                <div>Views: {song.views}</div>
                <div>Likes: {song.likes}</div>
                <div>Dislikes: {song.dislikes}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SongsList;
