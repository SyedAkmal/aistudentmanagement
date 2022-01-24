import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent {
  toppings = new FormControl();
  toppingList: string[] = ['Male', 'Female', 'TransGender'];
  Course = new FormControl();
  CourseList: string[] = ['BBA', 'BCA', 'MBA','MCA','BE','OTHERS'];
  constructor() {}
}
