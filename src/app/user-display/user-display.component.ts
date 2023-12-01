import { Component,Input } from '@angular/core';
import {User} from '../user'

@Component({
  selector: 'app-user-display',
  templateUrl:'./user-display.component.html',
  styleUrl: './user-display.component.css'
})
export class UserDisplayComponent {
  @Input() users : User[] = [];

  getOccupationClass(occupation:string): string {
    switch(occupation.toLowerCase()){
      case 'backend':
        return 'backend';
      case 'frontend':
        return 'frontend';
      default :
        return 'other';
    }


}
}