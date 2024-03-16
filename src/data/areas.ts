type Area = {
  name: string;
  coords: {
    lat: number;
    lon: number;
  };
};

const areas: Record<string, Area> = {
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

export default areas;
