import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-heroe.component.ts',
  imports: [],
  templateUrl: './heroe.component.ts.component.html',
})
export class HeroeComponentTsComponent {
  name = signal('IronMan');
  age = signal(45);
  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`
    return description;
  })

  capitalized = computed(() =>
    this.name().toUpperCase()
  )

  changeHero() {
    this.name.update(current => current = 'Spiderman')
    this.age.update(current => current = 22)
  }

  resetForm() {
    this.name = signal('IronMan');
    this.age = signal(45);
  }

  changeAge() {
    this.age.set(60);
  }

}
