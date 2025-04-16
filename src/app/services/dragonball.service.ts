import { Injectable, signal } from '@angular/core';
import { character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DragonBallService {
    characters = signal<character[]>([
        { id: 1, name: 'Goku', power: 9000 },
        { id: 2, name: 'Vegeta', power: 8000 },
    ]);

    addCharacter(character: character) {
        this.characters.update((list) => [...list, character]);
    }

}