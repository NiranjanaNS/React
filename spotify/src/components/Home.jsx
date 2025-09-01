import React from "react";
import Section from "./Section";
import { trendingSongs, popularArtists, popularAlbums, popularRadio } from "../assets/data";

const Home = () => {
  return (
    <div className="p-4 overflow-y-auto">
      <Section title="Trending Songs" items={trendingSongs} type="song" />
      <Section title="Popular Artists" items={popularArtists} type="artist" />
      <Section title="Popular Albums & Singles" items={popularAlbums} type="album" />
      <Section title="Popular Radio" items={popularRadio} type="radio" />
    </div>
  );
};

export default Home;
