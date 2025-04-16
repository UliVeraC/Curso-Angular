import { NgClass } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface character {
  id: number,
  name: string,
  power: number
}

@Component({
  selector: 'app-dragonball',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './dragonball.component.html'
})
export class DragonballComponent {
  name = signal('');
  power = signal(0);



  characters = signal<character[]>([
    { id: 1, name: "Goku", power: 9000 },
    // { id: 2, name: "Vegeta", power: 8000 },
    // { id: 3, name: "Piccolo", power: 6000 },
    // { id: 4, name: "Yamcha", power: 3000 },
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
