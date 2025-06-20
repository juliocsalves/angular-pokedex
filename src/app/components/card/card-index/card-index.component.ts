import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-index',
  standalone: true, // se for standalone como os outros
  imports: [],
  templateUrl: './card-index.component.html',
  styleUrls: ['./card-index.component.css']
})
export class CardIndexComponent {
  @Input() pokeIndex: string = '';
}
