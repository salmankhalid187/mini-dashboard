import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './landing/landing.module#LandingModule' },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'directive-demo', loadChildren: './directive-demo/directive-demo.module#DirectiveDemoModule' },
  { path: 'game-page' , loadChildren: './game-page/game-page.module#GamePageModule'},
  { path: 'qrcode-demo', loadChildren: './qrcode-demo/qrcode-demo.module#QrcodeDemoModule' },
  { path: 'observables-demo', loadChildren: './observables-demo/observables-demo.module#ObservablesDemoModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
