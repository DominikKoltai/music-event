import React from "react";
import useFetch from "../../hooks/useFetch";

const ArtistCard = () => {
  const { data, loading } = useFetch("http://localhost:8080/artist/artists");

  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
      {loading ? (
        "Loading"
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">Artists</h1>
          <div className="grid grid-cols-3 gap-6">
            {data.map((d) => (
              <div className="flex flex-col items-center" key={d.id}>
                <img
                  src={d.img}
                  alt="Artist"
                  className="w-32 h-32 rounded-full mb-2"
                />
                <h2 className="text-xl font-bold">{d.name}</h2>
                <p className="text-gray-500">Genre: {d.genre}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ArtistCard;
