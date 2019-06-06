import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    {
        path: '', title: 'Guia Judicial', icon: 'ft-book', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/dependencia/listado', title: 'Listado de Dependencias ', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Novedades', icon: 'ft-box', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
        ]
    },

   
];
