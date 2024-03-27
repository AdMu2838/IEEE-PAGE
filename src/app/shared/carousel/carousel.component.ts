import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{
//custom properties
  @Input() slides: { image: string, title?: string, description?: string }[] = [];
  @Input() carouselWidth: string = '100%';
  @Input() carouselId: string = 'carouselExampleInterval';
  @Input() carouselHeight: string = '40vw';
  @Input() brillo: string='100%';

  constructor() { }

  ngOnInit(): void {

  }


}
