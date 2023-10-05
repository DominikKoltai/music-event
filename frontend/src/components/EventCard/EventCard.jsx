import useFetch from "../../hooks/useFetch.jsx";

const EventCard = () => {
  const { data, loading } = useFetch("http://localhost:8080/event/events");

  console.log(data);

  return (
    <div className="bg-gray-800 rounded-lg pt-6 pb-2 px-6">
      {loading ? (
        "Loading"
      ) : (
        <>
          <div>
            {data.map((d) => (
              <div key={d.id}>
                <img
                  src={d.img}
                  alt="Event"
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{d.name}</h3>
                <p className="text-gray-300">{d.date}</p>
                <p className="text-gray-300">{d.desc}</p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4 mb-4">
                  Buy Tickets
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default EventCard;
