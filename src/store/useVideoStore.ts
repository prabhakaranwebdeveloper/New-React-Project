import { create } from "zustand";

type VideoStore = {
  playState: boolean;
  setPlayState: (value: boolean) => void;
};

export const useVideoStore = create<VideoStore>((set) => ({
  playState: false,

  setPlayState: (value) =>
    set({
      playState: value,
    }),
}));