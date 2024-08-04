import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';

export const routes: Routes = [
    {
        path:'', component:RegisterComponent
    },
    {
        path:'register', component:RegisterComponent
    },
    {
        path:'search', component:SearchComponent
    },
    {
        path:'emp', component:SearchDeleteComponent
    },
    {
        path:'update', component:UpdateComponent
    }


];
