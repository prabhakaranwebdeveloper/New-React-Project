import React, { useRef } from "react";
import "./Videoplayer.css";
import video from "../../assets/edusityAssets/collegevideo.mp4";

type VideoplayerProps = {
  playState: boolean;
  setPlayState: React.Dispatch<React.SetStateAction<boolean>>;
};

const Videoplayer: React.FC<VideoplayerProps> = ({ playState, setPlayState }) => {
  const player = useRef<HTMLDivElement | null>(null);

  const closePlayer = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`videoplayer ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default Videoplayer;