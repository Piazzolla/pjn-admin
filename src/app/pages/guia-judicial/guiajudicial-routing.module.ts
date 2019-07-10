import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoDependenciasComponent } from './Listado/listado-dependencias.component';
import { AbmDependenciaComponent } from './ABM/abm-dependencia.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listado',
        component: ListadoDependenciasComponent,
        data: {
          title: 'Listado de Avisos'
        }
      },
      {
        path: 'edit/:id',
        component: AbmDependenciaComponent,
        data: {
          title: 'Abm Dependencia'
        }
      },
      {
        path: 'integrantes/:id',
        component: IntegrantesComponent,
        data: {
          title: 'Integrantes de Dependencia'
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