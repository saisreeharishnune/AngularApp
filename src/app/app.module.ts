import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { UserModule } from './user/user.module';
import { SearchComponent } from './search/search.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataServiceAPI } from './data.services';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    SearchComponent,
    SignupComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,UserModule,
    AppRoutingModule,HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataServiceAPI),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
