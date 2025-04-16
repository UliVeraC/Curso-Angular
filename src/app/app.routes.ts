import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HeroeComponentTsComponent } from './pages/heroe/heroe.component.ts.component';
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
        path: 'dragonballsuper',
        component: DragonballSuperComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
