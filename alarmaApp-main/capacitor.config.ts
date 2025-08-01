import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'alarmaRobo.ionic',
  appName: 'alarmaApp',
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
