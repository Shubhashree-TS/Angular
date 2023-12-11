import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { DisplayUserComponent } from './display-user/display-user.component';


const routes: Routes = [
  {path:'adduser',component:AddUserComponent},
  {path:'deleteuser',component:DeleteUserComponent},
  {path:'displayuser',component:DisplayUserComponent},
  {path:'',redirectTo:'/adduser',pathMatch:'full'}//default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
