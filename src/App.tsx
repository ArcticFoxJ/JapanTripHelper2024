import { useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import areas from './data/areas';
import locations from './data/locations';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  const [viewState, setViewState] = useState({
    longitude: areas.Tokyo.coords.lon,
    latitude: areas.Tokyo.coords.lat,
    zoom: 10,
  });

  return (
    <main className="flex flex-col h-screen bg-slate-200">
      <header className="w-full flex-initial border-b-2 border-black">
        <h1 className="mt-2 mb-5 text-5xl font-medium leading-tight text-center">
          Japan Trip 2024
        </h1>

        <div className="text-center my-5">
          <label className="font-semibold">Locations:</label>{' '}
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
      </header>

      <div className="flex flex-grow">
        <Map
          mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
          initialViewState={viewState}
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          style={{ width: '100%', height: '100%' }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          {locations.map((location) => (
            <Marker
              key={location.name}
              latitude={location.coords.lat}
              longitude={location.coords.lon}
              color="red"
            />
          ))}
        </Map>
      </div>
    </main>
  );
}

export default App;
