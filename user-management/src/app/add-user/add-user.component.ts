
import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

userName:string='';
age:number=0;
occupation:string='';
constructor(private userservice:UserService, private router: Router){

}


addUser(){
  const newUser= {
    userName:this.userName,
    age:this.age,
    occupation:this.occupation}
    console.log(newUser)
    if(this.userName=='' || this.age==0 || this.occupation==''){
      return 
    }
    this.userservice.addUser(newUser);
    this.userservice.isUserAdded=true;
    

      // Clear the form fields
      this.userName = '';
      this.age = 0;
      this.occupation = '';
    
  }

 
  }


