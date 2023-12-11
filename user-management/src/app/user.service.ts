import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  private users : any[] =[];
  
  getUser(){
    console.log('getting user')
    return this.users;
  };
  deleteUser(index:number){
    console.log('deleting user')
    this.users.splice(index,1);
  };
 addUser(user:any){
  console.log('adding user')
  this.users.push(user);
 }
 }




