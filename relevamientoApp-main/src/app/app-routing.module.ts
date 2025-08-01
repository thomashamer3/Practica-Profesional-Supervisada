import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cosas-lindas',
    loadChildren: () => import('./components/cosas-lindas/cosas-lindas.module').then( m => m.CosasLindasPageModule)
  },  {
    path: 'cosas-feas',
    loadChildren: () => import('./components/cosas-feas/cosas-feas.module').then( m => m.CosasFeasPageModule)
  },
  {
    path: 'graficos',
    loadChildren: () => import('./components/graficos/graficos.module').then( m => m.GraficosPageModule)
  },
  {
    path: 'mis-fotos',
    loadChildren: () => import('./components/mis-fotos/mis-fotos.module').then( m => m.MisFotosPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
