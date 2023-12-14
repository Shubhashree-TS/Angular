import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { UserGuard} from './user-guard.service';
import {guardGuard} from './guards/guard.guard';


const routes: Routes = [
  {path:'adduser',component:AddUserComponent},
  {
    path: 'deleteuser',
    component: DeleteUserComponent,
    canActivate: [guardGuard]// Apply the guard
  },
  {path:'displayuser',component:DisplayUserComponent},
  {path:'',redirectTo:'/adduser',pathMatch:'full'},
  // {path:'**',component:PageNotfoundComponent},//default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


