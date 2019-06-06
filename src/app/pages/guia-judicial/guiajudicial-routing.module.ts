import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoDependenciasComponent } from './Listado/listado-dependencias.component';
import { AbmDependenciaComponent } from './ABM/abm-dependencia.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listado',
        component: ListadoDependenciasComponent,
        data: {
          title: 'Listado de Dependencias'
        }
      },
      {
        path: 'edit/:id',
        component: AbmDependenciaComponent,
        data: {
          title: 'Abm Dependencia'
        }
      },      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuiaJudicialRoutingModule { }