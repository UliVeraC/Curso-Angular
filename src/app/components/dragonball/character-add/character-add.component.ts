import { Component, output, signal } from '@angular/core';
import { character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  newCharacter = output<character>();


  characters = signal<character[]>([
    { id: 1, name: "Goku", power: 9000 },
    { id: 2, name: "Vegeta", power: 8000 },
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    console.log(this.name(), this.power())
    const newCharacter: character = {
      id: Math.floor(Math.random()),
      name: this.name(),
      power: this.power(),
    };

    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields() {
    this.name.set(''),
      this.power.set(0)
  }

}
