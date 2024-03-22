import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  carouselSlides = [
    { image: 'assets/images/carrusel1.jpg',
      title: 'UNSA IEEE',
      description: 'Nuestro capítulo está formado por una junta directiva ejecutiva dedicada a asegurarse de que te sientas bienvenido. Priorizamos tu participación conectando a estudiantes de primer año con estudiantes de cursos superiores, a estudiantes de pregrado con profesores, y a solicitantes con pasantías potenciales.' },
    { image: 'assets/images/imagen2.png', title: 'UNSA IEEE', description: '¡Involúcrate en todo lo relacionado con el curso 6 y más allá asistiendo a nuestros eventos! Conocerás a estudiantes tan apasionados como tú en el diverso espectro de colores que representa el curso 6, así como a profesores y líderes en el campo.' },
    { image: 'assets/images/imagen3.jpg', title: 'Slide 3 Title', description: 'Description for Slide 3' },

  ];

  carouselSlides2 = [
    { image: 'assets/images/imagen1.jpeg',

      description: 'Evento numero 1' },
    { image: 'assets/images/imagen2.png', description: 'Evento numero 2' },
    { image: 'assets/images/imagen3.jpg', description: 'Description for Slide 3' },
  ];
}
