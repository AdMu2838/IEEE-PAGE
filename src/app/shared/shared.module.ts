import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import { CarouselComponent } from './carousel/carousel.component';
import {RedesComponent} from "./redes/redes.component";
import { CardComponent } from './card/card.component';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        CarouselComponent,
        RedesComponent,
        CardComponent,
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    RedesComponent,
    CardComponent,
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
