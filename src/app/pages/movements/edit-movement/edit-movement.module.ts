import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMovementPageRoutingModule } from './edit-movement-routing.module';

import { EditMovementPage } from './edit-movement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMovementPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditMovementPage]
})
export class EditMovementPageModule {}
