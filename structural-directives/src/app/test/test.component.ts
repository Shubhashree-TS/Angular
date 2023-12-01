import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  
  <h2>Sturctural Directives</h2>

  <h2>------ngIf------</h2>
  <h2>Syntax 1</h2>
  <h2 *ngIf = "displayName ; else elseblock" >Condition is true hence getting displayed</h2>
  <ng-template #elseblock>
    <h2>this is else block for false condition </h2>
  </ng-template >
  <h2>Syntax 2</h2>
  <div *ngIf = "displayDetails ; then thenblock ; else elseblock"></div>
  <ng-template #thenblock><h2>this is then block for true condition</h2></ng-template>
  <ng-template #elseblock><h2>this is else block for false condition</h2></ng-template>

  <h2>------ngSwitch------</h2>
  <div [ngSwitch]="color" >

    <div *ngSwitchCase = "'red'">You picked RED</div>
    <div *ngSwitchCase = "'blue'">You picked BLUE</div>
    <div *ngSwitchCase = "'green'">You picked GREEN</div>
    <div *ngSwitchDefault >You pick the color</div>

  </div>


  <h2>------ngFor------</h2>
  <div *ngFor="let color of colors; index as i">
    <h2>{{i}} {{color}}</h2>
  </div>
  <h2>------first as f------</h2>
  <div *ngFor="let color of colors; first as f">
    <h2>{{f}} {{color}}</h2>
  </div>
  <h2>------last as l------</h2>
  <div *ngFor="let color of colors; last as l">
    <h2>{{l}} {{color}}</h2>
  </div>
  <h2>------odd as o------</h2>
  <div *ngFor="let color of colors; odd as o">
    <h2>{{o}} {{color}}</h2>
  </div>
  <h2>------even as e------</h2>
  <div *ngFor="let color of colors; even as e">
    <h2>{{e}} {{color}}</h2>
  </div>


  `,
  styleUrl: './test.component.css'
})
export class TestComponent {
  public displayName = false;
  public displayDetails = true;


  public color = "blue";

  public colors =  [ 'red','blue','black'];
}
