import React from "react";
import youtubeParser from "../../utils/utils";
import SongsList from "../SongsList";

const PlayYoutubeModal = ({ selectedSong, setSelectedSong }) => {
  return (
    <div className="modal fade" id="PlayYoutubeModal">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Youtube Player</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              onClick={() => setSelectedSong({})}
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <iframe
                width="600"
                height="400"
                src={`https://www.youtube.com/embed/${youtubeParser(
                  selectedSong.link || ""
                )}`}
                title="Embedded youtube"
              />
              {selectedSong.relatedPlaylists && (
                <SongsList
                  songsList={selectedSong.relatedPlaylists}
                  setSelectedSong={setSelectedSong}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayYoutubeModal;
