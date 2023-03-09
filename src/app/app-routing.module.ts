import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'platform', loadChildren: () => import('./platform/platform.module').then(m => m.PlatformModule) }, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'platform'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
