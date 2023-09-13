import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResContrasenaPageRoutingModule } from './res-contrasena-routing.module';

import { ResContrasenaPage } from './res-contrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResContrasenaPageRoutingModule
  ],
  declarations: [ResContrasenaPage]
})
export class ResContrasenaPageModule {}
