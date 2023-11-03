import { RouteInfo } from './vertical-menu.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
  {
    path: '/page', title: 'Evaluación', icon: '../../../assets/img/svg/Scotia-Icons-Eval.svg', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/page/1', title: 'Formalización', icon: '../../../assets/img/svg/Scotia-Icons-Formaliza.svg', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/page/2', title: 'Reproceso', icon: '../../../assets/img/svg/Scotia-Icons-Reproceso.svg', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/page/3', title: 'Firmado', icon: '../../../assets/img/svg/Scotia-Icons-Firmado.svg', class: 'bl', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  // {
  //   path: '', title: 'Menu Levels', icon: 'ft-align-left', class: 'has-sub', badge: '3', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
  //   submenu: [
  //       { path: '/YOUR-ROUTE-PATH', title: 'Second Level', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  //       {
  //           path: '', title: 'Second Level Child', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
  //           submenu: [
  //               { path: '/YOUR-ROUTE-PATH', title: 'Third Level 1.1', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  //               { path: '/YOUR-ROUTE-PATH', title: 'Third Level 1.2', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  //           ]
  //       },
  //   ]
  // },
];
