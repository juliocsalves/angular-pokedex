import { Component, Input } from '@angular/core';
import { CardIndexComponent } from "./card-index/card-index.component";
import { CardTypeComponent } from "./card-type/card-type.component";
import { CardNameComponent } from "./card-name/card-name.component";
import { CardAbilitiesComponent } from "./card-abilities/card-abilities.component";

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [CardIndexComponent, CardTypeComponent, CardNameComponent, CardAbilitiesComponent],
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input()
    pokeImage: string = "";
    @Input()
    pokeAbilities: string = '';
    @Input()
    pokeIndex: string = '';
    @Input()
    pokeType: string[] = [];
    @Input()
    pokeName: string = '';

    showAbilities = false;

    toggleAbilities(event: MouseEvent): void {
        event.preventDefault(); // evita navegação do <a>
        this.showAbilities = !this.showAbilities;
    }
}
