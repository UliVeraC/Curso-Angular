import { effect, Injectable, signal } from '@angular/core';
import { character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): character[] => {
    const characters = localStorage.getItem('characters');

    return characters ? JSON.parse(characters) : [];

    return []
}

@Injectable({ providedIn: 'root' })
export class DragonBallService {
    characters = signal<character[]>(loadFromLocalStorage());

    saveToLocalStorage = effect(() => {
        localStorage.setItem('characters', JSON.stringify(this.characters()));
    });


    addCharacter(character: character) {
        this.characters.update((list) => [...list, character]);
    }

}