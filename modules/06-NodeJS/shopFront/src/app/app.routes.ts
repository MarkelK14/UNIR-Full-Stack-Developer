import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NewProductComponent } from './pages/new-product/new-product.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'products/new', component: NewProductComponent}
];
