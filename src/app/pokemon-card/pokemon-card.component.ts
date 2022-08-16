import { Component, Input} from '@angular/core';
import {Pokemon} from '../../._model/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent  {

  @Input()
  public pokemon!: Pokemon;

  public leadingZero(str: string | number, size: number){
    let s = String(str);
    while (s.length < (size || 2)){
      s = '0' + s;
    }
    return s;
  }
  

}
