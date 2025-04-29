
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { RandomizerComponent } from './components/randomizer/randomizer.component';

export const routes: Routes = [
    {
        path:"home" ,
        component:HomeComponent, 
    },

    {
        path:"detail/:id",
        component: DetailComponent,
    },

    {
        path:"addForm",
        component: AddFormComponent,
    },

    {
        path:"randomizer",
        component: RandomizerComponent,
    },
    {
        path:"",
        redirectTo: "/home", pathMatch: "full",
    },

    {
        path: "**",
        loadComponent: () => import("./components/not-found/not-found.component")
                            .then(ts => ts.NotFoundComponent)
                            
    },

];
