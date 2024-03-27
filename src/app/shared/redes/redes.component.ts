import { Component} from '@angular/core';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.scss']
})
export class RedesComponent {
  mostrarCorreo: boolean = false;

  toggleCorreo(){
    this.mostrarCorreo = true;
  }
}
