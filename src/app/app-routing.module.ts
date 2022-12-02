import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [

  {path:'register', component: RegisterUserComponent},
  {path:'login', component: UserLoginComponent},
  {path:'userlist', component: UserListComponent},
  {path:'', component: UserLoginComponent},
  {path:'update-user/:userId', component:UpdateUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
