import { Routes } from '@angular/router';
import { EscuelaComponent } from './escuela/escuela.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
        title:'Home'
    },
    {
        path:'producto',
        component: EscuelaComponent,
        title:'prod'
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    }
];
