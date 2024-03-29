import { Component,HostListener,Input,ViewChild } from '@angular/core';
import {fakeAsync} from "@angular/core/testing";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() headerMovil: boolean = true;
  scrolled = true;
  fixedTop: boolean = true;
  @ViewChild('miRedesComponent') miRedesComponent: any;
  redesVisible: boolean = true;

  ngOnInit() {
    this.comportamiento();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
      this.scrolled = window.scrollY === 0;
  }

  comportamiento() {
    if (this.headerMovil === false) {
      this.fixedTop= false;
      this.redesVisible = false;
      this.onWindowScroll();
    }
  }
}
