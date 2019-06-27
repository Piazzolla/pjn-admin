import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoAvisosComponent } from './listado/listado-avisos.component';
import { AbmAvisosComponent } from './ABM/mod-avisos.component';
import { AltaAvisosComponent } from './ABM/alta-avisos.component';

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
      {
        path: 'edit/:id',
        component: AbmAvisosComponent,
        data: {
          title: 'Abm Aviso'
        }
      },   
      {
        path: 'alta',
        component: AltaAvisosComponent,
        data: {
          title: 'Alta Aviso'
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