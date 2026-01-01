import 'dotenv/config';

export default {
  expo: {
    name: 'imageMetaData',
    slug: 'imageMetaData',
    version: '1.0.0',
    orientation: 'portrait',
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      infoPlist: {
        NSLocationWhenInUseUsageDescription:
          'Este aplicativo utiliza sua localização para associar dados às imagens.',
        NSLocationAlwaysAndWhenInUseUsageDescription:
          'Sua localização é usada para adicionar metadados às imagens.',
      },
    },
    android: {
      package: 'com.seunome.imagemetadata',
      permissions: [
        'ACCESS_FINE_LOCATION',
        'ACCESS_COARSE_LOCATION',
      ],
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY,
        },
      },
    },
  },
};
