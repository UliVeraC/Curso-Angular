import { Component, input } from '@angular/core';
import { character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-caracter-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  characters = input.required<character[]>();
  listName = input.required<string[]>();
}
