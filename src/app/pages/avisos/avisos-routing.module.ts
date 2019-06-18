import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoAvisosComponent } from './listado/listado-avisos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listado',
        component: ListadoAvisosComponent,
        data: {
          title: 'Listado de Avisos'
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvisosRoutingModule { }