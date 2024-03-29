import { Component,HostListener,Input,ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  scrolled = true;
  @Input() headerMovil: boolean = false;
  fixedTop: boolean = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.headerMovil) {
      this.scrolled = window.scrollY === 0;
    }
    else {
      this.fixedTop = false;
    }
  }

  // Esta variable controla si el encabezado se mantiene en la parte superior de la página

}
