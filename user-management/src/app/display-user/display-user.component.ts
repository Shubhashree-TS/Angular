import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrl: './display-user.component.css'
})
export class DisplayUserComponent {

  users :any[]=[];
  
constructor(private userservice:UserService){
  this.users=this.userservice.getUser()
  console.log(this.users);
}


}
