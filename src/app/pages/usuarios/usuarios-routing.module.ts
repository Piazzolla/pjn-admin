import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusquedaUsuarioComponent } from './busqueda/busqueda.component';
//import { AbmDependenciaComponent } from './ABM/abm-dependencia.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'busqueda',
        component: BusquedaUsuarioComponent,
        data: {
          title: 'Búsqueda de Usuarios'
        }
      },
//      {
//        path: 'edit/:id',
//        component: AbmDependenciaComponent,
//        data: {
//          title: 'Abm Dependencia'
//        }
//      },      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule { }