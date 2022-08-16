import { Component} from '@angular/core';
import { PokemonService } from 'src/_service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
public pokemons: Pokemon[] = [
  {
    image: 'https:/assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    number: 1,
    name: 'Bulbasaur',
    types: [
      Type.Grass,
      Type.Posion
    ],
  },
];

constructor(
  public pokemonService: PokemonService) {

  }

  
}
  


interface Pokemon{
  image: string;
  number: number;
  name: string;
  types: Type[];

}

enum Type{
  Grass = 'Grass',
  Posion = 'Poison'
}
