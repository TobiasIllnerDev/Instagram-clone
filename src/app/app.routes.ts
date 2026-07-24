import { Routes } from '@angular/router';
import { MainPage } from './shared/component/main-page/main-page';
import { Contact } from './shared/component/contact/contact';

export const routes: Routes = [
    { path: '', component: MainPage},
    { path: 'contact', component: Contact},
    { path: '**', redirectTo: ''}
];
