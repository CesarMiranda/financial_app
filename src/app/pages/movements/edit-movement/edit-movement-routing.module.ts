import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMovementPage } from './edit-movement.page';

const routes: Routes = [
  {
    path: '',
    component: EditMovementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMovementPageRoutingModule {}
