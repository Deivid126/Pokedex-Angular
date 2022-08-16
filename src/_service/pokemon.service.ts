import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from, map, mergeMap, ReplaySubject } from 'rxjs';
import { Pokemon } from 'src/._model/Pokemon';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {


public pokemons: Pokemon[] = [];

  constructor(
    private htttpClient: HttpClient,
  ) {
    const allPokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/';
    this.htttpClient.get<any>(allPokemonsUrl).pipe(
      map(value => value.results),
      map((value: any) =>{
        return from (value).pipe(
          mergeMap((v:any) => this.htttpClient.get(v.url))
        );
      }),
      mergeMap( value => value),
    ).subscribe( (result: any) => {
      const pokemon: Pokemon = {
        image: result.sprites.front_default,
        number: result.id,
        name: result.name,
        types: result.types.map((t: { type: { name: any; }; }) => t.type.name)
         
      };
      console.log(result);
      this.pokemons[result.id] = pokemon;
    });
   }

  
}
