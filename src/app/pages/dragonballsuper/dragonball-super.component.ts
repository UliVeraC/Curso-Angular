import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";

interface character {
  id: number,
  name: string,
  power: number
}

@Component({
  selector: 'app-dragonballsuper',
  templateUrl: './dragonball-super.component.html',
  imports: [CharacterListComponent, CharacterAddComponent]
})
export class DragonballSuperComponent {
  name = signal('');
  power = signal(0);



  characters = signal<character[]>([
    { id: 1, name: "Goku", power: 9000 },
    { id: 2, name: "Vegeta", power: 8000 },
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update(
      (list) => [
        ...list, newCharacter
      ]
    )
    this.resetFields();
  }

  resetFields() {
    this.name.set(''),
      this.power.set(0)
  }
}
