import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  // {
  //   path: 'dashboard',
  //   loadChildren: './dashboard/dashboard.module#DashboardModule'
  // }, 
  
  {
     path: 'dependencia',
     loadChildren: './pages/guia-judicial/guiajudicial.module#GuiaJudicialModule'
   },
     {
     path: 'aviso',
     loadChildren: './pages/avisos/avisos.module#AvisosModule'
   },
     {
     path: 'usuarios',
     loadChildren: './pages/usuarios/usuarios.module#UsuariosModule'
   }
];