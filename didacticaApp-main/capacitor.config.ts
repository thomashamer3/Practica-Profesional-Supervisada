import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'didacticaApp.ionic',
  appName: 'didacticaApp',
  webDir: 'www',
  bundledWebRuntime: false,
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
