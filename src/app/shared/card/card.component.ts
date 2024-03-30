import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Input() name: string ="null";
  @Input() cargo: string ="null";
  @Input() imageSrc: string ="null";
  @Input() description: string ="null";

  constructor() { }

  ngOnInit(): void {
  }

}
