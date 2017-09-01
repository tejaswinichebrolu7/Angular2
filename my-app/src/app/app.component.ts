import { Component } from '@angular/core';

export class Person{
  id: number;
  name: string;
  salary:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Person details';
}