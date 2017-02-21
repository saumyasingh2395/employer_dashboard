import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component'

const routes: Routes = [
{
	path : 'signup',
	component : SignupComponent
},
{
	path : '',
	redirectTo : '/signup',
	pathMatch : 'full'
},
];


export const AppRoutingModule = RouterModule.forRoot(routes);

