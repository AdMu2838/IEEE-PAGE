import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FooterComponent} from "./shared/footer/footer.component";
import {HeaderComponent} from "./shared/header/header.component";



const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./events/events.module').then(m => m.EventsModule)
  },
  {
    path: 'equipo',
    loadChildren: () => import('./team/team.module').then(m => m.TeamModule)
  },
  {
    path: '',
    component: HeaderComponent, // Carga HeaderComponent en todas las rutas
    outlet: 'header', // Nombre del outlet donde se cargará el header
    pathMatch: 'full', // Asegura que el header se cargue solo en la ruta raíz
  },
  {
    path: '',
    component: FooterComponent, // Carga FooterComponent en todas las rutas
    outlet: 'footer', // Nombre del outlet donde se cargará el footer
    pathMatch: 'full', // Asegura que el footer se cargue solo en la ruta raíz
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
