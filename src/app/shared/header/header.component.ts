import { Component,HostListener,Input,ViewChild } from '@angular/core';
import {fakeAsync} from "@angular/core/testing";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() headerMovil: boolean = true;
  // @ts-ignore
  scrolled : boolean;
  fixedTop: boolean = true;
  @ViewChild('miRedesComponent') miRedesComponent: any;
  redesVisible: boolean = true;
  private scrollListener: any;
  ngOnInit() {
    this.comportamiento();
  }



  comportamiento() {
    // Detectar si el usuario está accediendo desde un dispositivo móvil
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);


    if (this.headerMovil === false || isMobile) {
      this.fixedTop = false;
      this.redesVisible = false;
      this.scrolled = false;
      this.disableScrollListener()
    } else {
      this.scrolled = true;
      this.enableScrollListener()
    }
  }
  //@HostListener('window:scroll', [])
  enableScrollListener() {
    this.scrollListener = this.onWindowScroll.bind(this);
    window.addEventListener('scroll', this.scrollListener);
  }

  disableScrollListener() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  onWindowScroll() {
    this.scrolled = window.scrollY === 0;
  }
}
