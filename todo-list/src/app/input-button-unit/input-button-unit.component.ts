import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{ title }}
    </p>

    <input [value]="title"
           type="text"
           (keyup.enter)="changeTitle($event)">

    <button (click)="changeTitle('click dziala!')">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(event: any): void {
    console.log('setNewUserName', event.target.value)
    this.title = event.target.value
  }
}