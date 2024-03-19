import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy{
//custom properties
  @Input() slides: { image: string, title: string, description: string }[] = [];
  @Input() carouselWidth: string = '100%';
  @ViewChild('carousel') carousel: ElementRef | undefined;

  currentIndex = 0;
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel() {
    this.interval = setInterval(() => {
      if (this.carousel) {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.carousel.nativeElement.querySelector('.carousel-item.active').classList.remove('active');
        this.carousel.nativeElement.querySelectorAll('.carousel-item')[this.currentIndex].classList.add('active');
      }
    }, 2000);


  }
  goToSlide(index: number) {
    this.currentIndex = index;
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
