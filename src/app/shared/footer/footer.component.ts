import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @ViewChild('mensajeInput') mensajeInput!: ElementRef;

  enviarMensaje(nombre: string) {
    if (nombre.trim() !== '') {
      const numeroWhatsapp = '+51936224203';
      const mensaje = `¡Hola!, mi nombre es ${nombre}.\n Quisiera ser parte de la IEEE Computer Society`;
      const mensajeEncoded = encodeURIComponent(mensaje);
      const url = `https://wa.me/${numeroWhatsapp}?text=${mensajeEncoded}`;
      window.open(url, '_blank');
    }
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
