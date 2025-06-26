import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../../components/card/card.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule, CardComponent],  // <<< Aqui, inclui o CardComponent
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	pokemonList: any[] = [];
	offset: number = 0;
	limit: number = 20;

	constructor(private pokeApi: PokeApiService) { }

	ngOnInit(): void {
		this.loadPokemon();
	}

	loadPokemon(): void {
		this.pokeApi.getPokemonList(this.offset, this.limit).subscribe({
			next: (data: any[]) => {
				const mappedData = data.map(poke => ({
					...poke,
					pokeIndex: poke.id.toString().padStart(3, '0'),
					typeNames: poke.types.map((t: any) => t.type.name),
					abilityNames: poke.abilities.map((a: any) => a.ability.name).join(', ')
				}));
				this.pokemonList.push(...mappedData);
				this.offset += this.limit;
			},
			error: (err) => console.error('Erro ao carregar Pokémon', err)
		});
	}


}
