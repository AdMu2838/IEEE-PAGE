import {Component, Input} from '@angular/core';
import {IcarruselItem} from "./Icarousel.metadata";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
//custom properties
  @Input() height = 500
  @Input() isFullScreen = false
  @Input() items: IcarruselItem[] = [];

  //final properties
  public finalHeight: string | number = 0;
  public currentPosition = 0;
  constructor() {
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
  }

  ngOnInit() {
    this.items.map ((item, index) => {
      item.id = index;
      item.marginLeft = 0;
    })
  }
  setCurrentPosition(position: number){
    this.currentPosition = position;
    // @ts-ignore
    this.items.find(item => item.id === 0).marginLeft = -100 * position;
  }
  setNext(){
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition < this.items.length) {
      finalPercentage = -100 * nextPosition;

    } else {
      nextPosition = 0;
    }
    // @ts-ignore
    this.items.find(item => item.id === 0).marginLeft = finalPercentage;
    this.currentPosition = nextPosition;
  }
  setBack(){
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;

    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    // @ts-ignore
    this.items.find(item => item.id === 0).marginLeft = finalPercentage;
    this.currentPosition = backPosition;
  }
}
