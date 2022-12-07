import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserJobDetailsComponent } from './add-user-job-details/add-user-job-details.component';
import { DeletedUserComponent } from './deleted-user/deleted-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserJobDetailsComponent } from './user-job-details/user-job-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [

  {path:'register', component: RegisterUserComponent},
  {path:'login', component: UserLoginComponent},
  {path:'userlist', component: UserListComponent},
  {path:'', component: UserLoginComponent},
  {path:'update-user/:userId', component:UpdateUserComponent},
  {path:'userjobdetails/:userId', component: UserJobDetailsComponent},
  {path:'add-user-job-details/:userId', component: AddUserJobDetailsComponent},
  {path:'deleted-user', component: DeletedUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
