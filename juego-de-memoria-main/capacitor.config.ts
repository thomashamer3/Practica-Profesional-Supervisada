import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.juegoMemoria',
  appName: 'juego-de-memoria',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins:{
    SplashScreen:{
      launchShowDuration: 500,
      launchAutoHide: true,
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      splashFullScreen: true
    }
  }
};

export default config;
