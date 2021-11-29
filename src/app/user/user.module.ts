import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'home', component: UsersComponent },
  { path: 'user/:id/posts', component: PostsComponent },

];

@NgModule({
  declarations: [
    UserDetailComponent,
    UsersComponent,
    PostsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
