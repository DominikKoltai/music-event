import React from "react";

const ArtistCard = () => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Artists</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col items-center">
          <img
            src="https://source.unsplash.com/random"
            alt="Artist"
            className="w-32 h-32 rounded-full mb-2"
          />
          <h2 className="text-xl font-bold">Artist 1</h2>
          <p className="text-gray-500">Genre: Pop</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://source.unsplash.com/random"
            alt="Artist"
            className="w-32 h-32 rounded-full mb-2"
          />
          <h2 className="text-xl font-bold">Artist 2</h2>
          <p className="text-gray-500">Genre: Rock</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://source.unsplash.com/random"
            alt="Artist"
            className="w-32 h-32 rounded-full mb-2"
          />
          <h2 className="text-xl font-bold">Artist 3</h2>
          <p className="text-gray-500">Genre: Hip Hop</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://source.unsplash.com/random"
            alt="Artist"
            className="w-32 h-32 rounded-full mb-2"
          />
          <h2 className="text-xl font-bold">Artist 4</h2>
          <p className="text-gray-500">Genre: R&B</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://source.unsplash.com/random"
            alt="Artist"
            className="w-32 h-32 rounded-full mb-2"
          />
          <h2 className="text-xl font-bold">Artist 5</h2>
          <p className="text-gray-500">Genre: Jazz</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://source.unsplash.com/random"
            alt="Artist"
            className="w-32 h-32 rounded-full mb-2"
          />
          <h2 className="text-xl font-bold">Artist 6</h2>
          <p className="text-gray-500">Genre: Country</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://source.unsplash.com/random"
            alt="Artist"
            className="w-32 h-32 rounded-full mb-2"
          />
          <h2 className="text-xl font-bold">Artist 7</h2>
          <p className="text-gray-500">Genre: Country</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://source.unsplash.com/random"
            alt="Artist"
            className="w-32 h-32 rounded-full mb-2"
          />
          <h2 className="text-xl font-bold">Artist 8</h2>
          <p className="text-gray-500">Genre: Country</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://source.unsplash.com/random"
            alt="Artist"
            className="w-32 h-32 rounded-full mb-2"
          />
          <h2 className="text-xl font-bold">Artist 9</h2>
          <p className="text-gray-500">Genre: Country</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
