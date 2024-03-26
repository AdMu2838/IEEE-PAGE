import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  carouselSlides = [
    {image: "assets/images/eventos/12022024-DesarrolloMovil.png"},
    {image: "assets/images/eventos/22012023-AWS.png"},
    {image: "assets/images/eventos/22012024-IBMCloud.png"},
    {image: "assets/images/eventos/24022024-AnalisisDatos.png"},
    {image: "assets/images/eventos/25122023-EnvenenamientoParametros.png"}
  ];
}
