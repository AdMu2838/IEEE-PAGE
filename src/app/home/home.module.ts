import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "./page/home.component";
import {SharedModule} from "../shared/shared.module";
import {HeaderComponent} from "../shared/header/header.component";


@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule

  ]
})
export class HomeModule { }
