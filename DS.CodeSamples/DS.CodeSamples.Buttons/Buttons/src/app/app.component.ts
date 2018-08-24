import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Buttons';
  valueHorizontal = 5;
  valueVertical = 5;
  min = 0;
  max = 15;
  smallStep = 1;
}
