import { Component } from '@angular/core';

@Component({
  selector: 'app-home',

  template: `
    <div>
      <app-carousel [slides]="carouselSlides"></app-carousel>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  carouselSlides = [
    { image: 'assets/images/imagen1.jpeg', title: 'Slide 1 Title', description: 'Description for Slide 1' },
    { image: 'assets/images/imagen2.png', title: 'Slide 2 Title', description: 'Description for Slide 2' },
    { image: 'assets/images/imagen3.jpg', title: 'Slide 3 Title', description: 'Description for Slide 3' },
    { image: 'assets/images/imagen3.jpg', title: 'Slide 2 Title', description: 'Description for Slide 4' },
  ];
}
