import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- isso aqui é essencial

@Component({
  selector: 'app-card-abilities',
  standalone: true,
  imports: [CommonModule], // <-- adiciona aqui
  templateUrl: './card-abilities.component.html',
  styleUrls: ['./card-abilities.component.css']
})
export class CardAbilitiesComponent {
  @Input() pokeAbilities: string = '';

  get abilitiesList(): string[] {
    return this.pokeAbilities
      .split(',')
      .map(a => a.trim())
      .filter(a => a);
  }
}
