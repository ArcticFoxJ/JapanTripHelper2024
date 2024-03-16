import { useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

type Location = {
  name: string;
  coords: {
    lat: number;
    lon: number;
  };
  website?: string;
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

const landmarks: Location[] = [
  // Tokyo
  {
    name: 'Ueno Park',
    coords: {
      lat: 35.7148306,
      lon: 139.7734112,
    },
  },
  {
    name: 'Tokyo National Museum',
    coords: {
      lat: 35.7190448,
      lon: 139.7759676,
    },
  },
  {
    name: 'Shinjuku Gyoen National Garden',
    coords: {
      lat: 35.6852173,
      lon: 139.7099423,
    },
  },
  {
    name: 'Isetan Department Store',
    coords: {
      lat: 35.6915774,
      lon: 139.7045481,
    },
  },
  {
    name: 'Loft - Shopping',
    coords: {
      lat: 35.6608987,
      lon: 139.699668,
    },
    website: 'https://www.gotokyo.org/en/spot/445/index.html',
  },
  {
    name: 'Edo-Tokyo Museum',
    coords: {
      lat: 35.6964779,
      lon: 139.7963744,
    },
  },
  {
    name: 'Tsukiji Soba Academy',
    coords: {
      lat: 35.6691528,
      lon: 139.7803817,
    },
  },
  {
    name: 'Reptiles Café',
    coords: {
      lat: 35.6980005,
      lon: 139.7054482,
    },
    website: 'https://reptiles-cafe.com/',
  },
  {
    name: 'Cafe Capyba',
    coords: {
      lat: 35.7200082,
      lon: 139.8143225,
    },
    website: 'https://cspace.co.jp/home_english/',
  },
  {
    name: 'Hedgehog Cafe',
    coords: {
      lat: 35.6696329,
      lon: 139.7033969,
    },
    website: 'https://harinezumi-cafe.com/en/store/harajuku/',
  },
  {
    name: 'Hedgehog and Otter Cafe',
    coords: {
      lat: 35.7111007,
      lon: 139.7975141,
    },
    website: 'https://harinezumi-cafe.com/en/store/asakusa/',
  },
  {
    name: 'Pig Cafe - Harajuku',
    coords: {
      lat: 35.6709477,
      lon: 139.7042907,
    },
    website: 'https://mipig.cafe/en/locations/harajuku/',
  },
  {
    name: 'TeamLab Borderless',
    coords: {
      lat: 35.6621638,
      lon: 139.7408233,
    },
    website: 'https://www.teamlab.art/e/borderless-azabudai/',
  },

  // Kyoto
  {
    name: 'Kinkakuji (Golden Pavilion)',
    coords: {
      lat: 35.0395293,
      lon: 135.7295373,
    },
  },
  {
    name: 'Kiyomizu-dera Temple',
    coords: {
      lat: 34.994303,
      lon: 135.7844389,
    },
  },
  {
    name: 'Samurai Ninja Museum',
    coords: {
      lat: 35.0048621,
      lon: 135.7666745,
    },
    website: 'https://mai-ko.com/samurai/',
  },
  {
    name: 'Tea ceremony',
    coords: {
      lat: 35.0076615,
      lon: 135.7663711,
    },
    website: 'https://mai-ko.com/culture/tea-ceremony/',
  },

  // Osaka
  {
    name: 'Osaka Castle',
    coords: {
      lat: 34.6873398,
      lon: 135.5258386,
    },
  },
  {
    name: 'Todaiji Temple',
    coords: {
      lat: 34.6892103,
      lon: 135.8397085,
    },
  },
  {
    name: 'Kasuga Taisha',
    coords: {
      lat: 34.6815876,
      lon: 135.8483692,
    },
  },
  {
    name: 'Suntory Whiskey House',
    coords: {
      lat: 34.7059242,
      lon: 135.4943935,
    },
    website:
      'https://www.tripadvisor.com/Restaurant_Review-g298566-d7184442-Reviews-Suntory_Whiskey_House-Osaka_Osaka_Prefecture_Kinki.html',
  },
  {
    name: 'Pig Cafe - Osaka',
    coords: {
      lat: 34.6716719,
      lon: 135.4987634,
    },
    website: 'https://mipig.cafe/en/locations/osaka/',
  },

  // Hakone
  {
    name: 'Hakone Shrine',
    coords: {
      lat: 35.2048332,
      lon: 139.0251968,
    },
  },
];

function App() {
  const [viewState, setViewState] = useState({
    longitude: areas.Tokyo.coords.lon,
    latitude: areas.Tokyo.coords.lat,
    zoom: 10,
  });

  return (
    <main className="flex flex-col h-screen">
      <header className="w-full flex-initial">
        <h1 className="my-5 text-5xl font-medium leading-tight text-center">
          Japan Trip 2024
        </h1>

        <div className="text-center my-5">
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
          {landmarks.map((location) => (
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
