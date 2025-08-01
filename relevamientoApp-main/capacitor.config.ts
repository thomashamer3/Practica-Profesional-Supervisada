import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'relevamiento.ionic',
  appName: 'relevamientoApp',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins:{
    SplashScreen:{
      launchShowDuration: 1000,
      launchAutoHide: true,
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      splashFullScreen: true
    }
  }
};

export default config;
