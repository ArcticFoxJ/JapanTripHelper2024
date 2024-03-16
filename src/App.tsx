const locations = [
  {
    name: 'Tokyo',
  },
  {
    name: 'Osaka',
  },
  {
    name: 'Kyoto',
  },
  {
    name: 'Nara',
  },
  {
    name: 'Hakone',
  },
];

function App() {
  return (
    <>
      <h1 className="mb-2 text-5xl font-medium leading-tight text-center">
        Japan Trip 2024
      </h1>
      <div className="text-center">
        <label>Locations:</label>{' '}
        {locations.map((location) => (
          <button className="ms-2 rounded-lg bg-slate-400 px-4 py-1 font-medium transition duration-150 ease-in-out hover:bg-sky-600">
            {location.name}
          </button>
        ))}
      </div>
      <div>TODO: map</div>
    </>
  );
}

export default App;
