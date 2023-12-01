import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <p>Hello {{name}} </p>
  <h2>{{2+9}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetUser()}}</h2>

  <h2>-----------Property binding-----------</h2>
  <input [id]=id type="text" value="Vinutha">
  <input [disabled]=isDisabled type="text" value="Shubratha">


  <h2>-----------Class binding-------------</h2>
  <h2 [ngClass]="nameClasses">Coding</h2>

  <h2>-----------Style binding-------------</h2>
  <h2 [style.color]="'orange'">Style Binding</h2>
  <h2 [style.color]="hasErrors ? 'red' : 'green'">Style Binding with conditional statement</h2>
  <h2 [style.color]="highlightColor">Style Binding with property</h2>
  <h2 [ngStyle]="titleStyles">Style Binding with mulitple styles using ngStyle directive</h2>


  <h2>-----------Event binding-----------</h2>
  <button (click)="onClickNoVar()">Greeting with event handler, see the console</button>
  <h2>{{greeting}}</h2>
  <button (click)="onClick($event)">Greeting with special variable $event</button>
  <h2>{{greetingWithVar}}</h2>
  <p><button (click)="greetInlineDeclare='This is an Inline Html element'">Greeting by writing code that need to be executed</button>  </p>
  <h2>{{greetInlineDeclare}}</h2>



  <h2>-----------Template reference variables-----------<h2>
  <input #myInput type="text">
  <button (click)="logInput(myInput.value)">Log this in console</button>


  <h2>-----------Two way Binding-----------<h2>
  <input [(ngModel)]="twoWayInput" type="text">
  {{twoWayInput}}
  
 `,
  styles: [
    `.text-success {
      color:green;
    }
    .text-special {
      font-style:italic;
    }
    .text-errors {
      color:red;
    }`

  ]
})
export class TestComponent {
  public name = "Sagar";
  public twoWayInput = " ";
  public id= "myId";
  public isDisabled = true;
  public isSpecial = true;
  public hasErrors = true;
  public nameClasses = {
    "text-success":!this.hasErrors,
    "text-errors": this.hasErrors,
    "text-special": this.isSpecial
  }

  public highlightColor = "orange";
  public titleStyles = {
    color:"purple",
    fontStyle:"italic"
  }
  public greeting = " ";
  public greetingWithVar = " ";
  public greetInlineDeclare = " ";
  onClick(event:any){
    console.log(event);
    this.greetingWithVar = event.type;

  }

  onClickNoVar(){
    this.greeting = "Hi Shubha!";
  }

  logInput(value:any){
    console.log(value);
  }

greetUser(){
    return "Hello" + this.name;
  }

}
