import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformComponent } from './platform.component';

const routes: Routes = [{
  path: '', component: PlatformComponent, children: [
    { path: 'kanban', loadChildren: () => import('./kanban/kanban.module').then(m => m.KanbanModule), }, { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) }, { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
