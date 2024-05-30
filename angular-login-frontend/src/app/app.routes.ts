import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'homeView', component: HomeViewComponent},
    { path: 'register', component: RegisterComponent },

];
