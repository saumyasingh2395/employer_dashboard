import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './authentication.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DashboardComponent,
    LoginComponent,
    AboutComponent,
    ProductsComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     AppRoutingModule
  ],
  providers: [ UserService , AuthenticationService , AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
