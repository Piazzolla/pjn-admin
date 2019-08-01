import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoDependenciasComponent } from './Listado/listado-dependencias.component';
import { AbmDependenciaComponent } from './ABM/abm-dependencia.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { EditIntegranteComponent } from './integrantes/edit-integrante/edit-integrante.component';


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
      {
        path: 'integrantes/edit/:id',
        component: EditIntegranteComponent,
        data: {
          title: 'Editar Integrante'
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