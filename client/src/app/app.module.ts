import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './user.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     AppRoutingModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
