import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';

import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{path:'welcome',component:WelcomeComponent},
                        {path:'login',component:LoginComponent},
                        {path:'signup',component:SignupComponent},
                        {path:'', redirectTo:'welcome',pathMatch:'full'},
                        {path:'**', component:PageNotFoundComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
