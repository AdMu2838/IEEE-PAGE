import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./page/home.component";
import {HeaderComponent} from "../shared/header/header.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',component: HomeComponent,
      },
      {
        path: 'header',component: HeaderComponent,
      },
      {
        path: 'footer',component: HeaderComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
