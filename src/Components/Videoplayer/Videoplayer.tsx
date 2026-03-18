import React, { useRef } from "react";
import "./Videoplayer.css";
import video from "../../assets/edusityAssets/collegevideo.mp4";
import { useVideoStore } from "../../store/useVideoStore";


const Videoplayer: React.FC = () => {
  const playState = useVideoStore((state) => state.playState);
  const setPlayState = useVideoStore((state) => state.setPlayState);
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