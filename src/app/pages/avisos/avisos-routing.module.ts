import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoAvisosComponent } from './listado/listado-avisos.component';
import { ModAvisosComponent } from './ABM/mod-avisos.component';
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
        component: ModAvisosComponent,
        data: {
          title: 'Modificar Aviso'
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