import { Component,HostListener,Input } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  scrolled= true;
  @Input() fixedTop: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll(){
    this.scrolled = window.scrollY === 0;
  }
}
