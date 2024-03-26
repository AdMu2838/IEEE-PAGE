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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
