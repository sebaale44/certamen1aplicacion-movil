import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResContrasenaPage } from './res-contrasena.page';

const routes: Routes = [
  {
    path: '',
    component: ResContrasenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResContrasenaPageRoutingModule {}
