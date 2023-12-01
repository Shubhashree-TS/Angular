import { Component } from '@angular/core';

import { User } from './user'

@Component({
  selector: 'app-root',
  template: `
  <app-user-input (Data)="addUser($event)"></app-user-input>
  <app-user-display [users]="userDisplay"></app-user-display>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'userprofile';


  userDisplay: User[] =[];
  addUser(user:User){
    if(user.name=='' || user.age==0 || user.occupation==''){
      return 
    }
    this.userDisplay.push(user);
  }
}
