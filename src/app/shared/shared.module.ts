import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import { CarouselComponent } from './carousel/carousel.component';
import {RedesComponent} from "./redes/redes.component";


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        CarouselComponent,
        RedesComponent,
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    RedesComponent,
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
