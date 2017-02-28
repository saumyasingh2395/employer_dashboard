import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
{
	path : 'signup',
	component : SignupComponent
},
{
	path: 'dashboard',
	component : DashboardComponent
},
{
	path : '',
	redirectTo : '/signup',
	pathMatch : 'full'
},
];


export const AppRoutingModule = RouterModule.forRoot(routes);

