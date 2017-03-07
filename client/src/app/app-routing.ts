import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './auth.guard';

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
	path: 'login',
	component : LoginComponent
},
{
	path: 'about',
	component : AboutComponent
},
{
	path: 'products',
	component : ProductsComponent
},
{
	path : '',
	redirectTo : '/signup',
	pathMatch : 'full'
},
];


export const AppRoutingModule = RouterModule.forRoot(routes);

