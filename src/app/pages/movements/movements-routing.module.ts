import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovementsPage } from './movements.page';

const routes: Routes = [
  {
    path: '',
    component: MovementsPage
  },
  {
    path: 'new-movement',
    loadChildren: () => import('./new-movement/new-movement.module').then( m => m.NewMovementPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./movement-detail/movement-detail.module').then( m => m.MovementDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovementsPageRoutingModule {}
