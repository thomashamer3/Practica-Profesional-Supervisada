import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'chatAula.ionic',
  appName: 'ConversandoEnElAula',
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
