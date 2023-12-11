import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css'
})
export class DeleteUserComponent {

  users:any[]=[]
constructor(private userservice:UserService){
  this.users=this.userservice.getUser();
}

deleteUser(index:number){
  this.userservice.deleteUser(index);
}


}
