import { useState } from 'react';
import Map from 'react-map-gl';

type Location = {
  name: string;
  coords: {
    lat: number;
    lon: number;
  };
};

const areas: Record<string, Location> = {
  Tokyo: {
    name: 'Tokyo',
    coords: {
      lat: 35.6821936,
      lon: 139.762221,
    },
  },
  Osaka: {
    name: 'Osaka',
    coords: {
      lat: 34.661629,
      lon: 135.4999268,
    },
  },
  Kyoto: {
    name: 'Kyoto',
    coords: {
      lat: 35.021041,
      lon: 135.7556075,
    },
  },
  Nara: {
    name: 'Nara',
    coords: {
      lat: 34.6829008,
      lon: 135.8545975,
    },
  },
  Hakone: {
    name: 'Hakone',
    coords: {
      lat: 35.222919,
      lon: 139.031616,
    },
  },
};

function App() {
  const [viewState, setViewState] = useState({
    longitude: areas.Tokyo.coords.lon,
    latitude: areas.Tokyo.coords.lat,
    zoom: 10,
  });

  return (
    <>
      <h1 className="mb-2 text-5xl font-medium leading-tight text-center">
        Japan Trip 2024
      </h1>
      <div className="text-center">
        <label>Locations:</label>{' '}
        {Object.keys(areas).map((areaKey) => (
          <button
            key={areaKey}
            title={areaKey}
            className="ms-2 rounded-lg bg-slate-400 px-4 py-1 font-medium transition duration-150 ease-in-out hover:bg-sky-600"
            onClick={() => {
              setViewState({
                longitude: areas[areaKey].coords.lon,
                latitude: areas[areaKey].coords.lat,
                zoom: 10,
              });
            }}
          >
            {areas[areaKey].name}
          </button>
        ))}
      </div>
      <div>
        <Map
          mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
          initialViewState={viewState}
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          style={{ width: 600, height: 400 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </div>
    </>
  );
}

export default App;
