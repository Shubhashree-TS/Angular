import { Component, Output,EventEmitter } from '@angular/core';
import {User} from '../user'

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl:  './user-input.component.css'
})
export class UserInputComponent {
@Output() Data =new EventEmitter<User>();
user: User = {
  name:'',
  age:0,
  occupation:'',
}

submit(){
 this.Data.emit(this.user);
 this.user = {
  name:'',
  age:0,
  occupation:''
 }
}
}
