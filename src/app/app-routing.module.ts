import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersListComponent} from "./users/users-list/users-list.component";
import {UserComponent} from "./users/user/user.component";
import {UserResolver} from "./users/lib/user.resolver";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {path: '', component: UsersListComponent},
  {path: 'user/:id', component: UserComponent, resolve: {
    user: UserResolver
  }},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
