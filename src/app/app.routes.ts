import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HeroeComponentTsComponent } from './pages/heroe/heroe.component.ts.component';
import { DragonballComponent } from './pages/dragonball/dragonball.component';
import { DragonballSuperComponent } from './pages/dragonballsuper/dragonball-super.component';

export const routes: Routes = [
    {
        path: '',
        component: CounterComponent
    },

    {
        path: 'hero',
        component: HeroeComponentTsComponent
    },
    {
        path: 'dragonball',
        component: DragonballComponent
    },
    {
        path: 'dragonballsuper',
        component: DragonballSuperComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
