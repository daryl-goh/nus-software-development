import { Component } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  title = 'Employee page';

  number1 = 21;
  number2 = 20;
  // visible = (this.number1 > this.number2) ? true : false;
  visible = this.ShowContent(this.number1, this.number2);

  IsVisible = true;
  Name: any;

  myName: string = "COMWorks";

  ShowContent(val1: number, val2: number): boolean {
    if (val1 < val2) {
      return true;
    } else {
      return false;
    }
  }

  OnChange(arg: any) {
    this.IsVisible = arg;
  }

  color: any;

  SetColor(event: any) {
    this.color = event.target.value;
  }

  Employee: Employee[] = [];

  constructor() {
    this.Employee = [
      {
        Name: 'Ah Kow',
        Age: 21,
        Gender: 'M',
      },
      {
        Name: 'Ah Meow',
        Age: 22,
        Gender: 'F',
      },
      {
        Name: 'Ah Tur',
        Age: 52,
        Gender: 'M',
      },
    ];
  }

  GetMoreEmployee(): void {
    this.Employee = [
      {
        Name: 'Amelia',
        Age: 11,
        Gender: 'M',
      },
      {
        Name: 'Benedict',
        Age: 27,
        Gender: 'F',
      },
      {
        Name: 'Catboy',
        Age: 2,
        Gender: 'M',
      },
    ];
  }

  CheckAge(Age: number) {
    let val = Age < 18 ? 'Under 18': 'Above 18';

    switch(val) {
      case 'Under 18':
        return 'red';
      case 'Above 18':
        return 'green';
    }

    return "";
  }

  TrackByEmployeeName(index: number, employee: any): String {
    return employee.Name;
  }

  GetCSS(isEven: any) {
    if (isEven) {
      return "color1";
    } else {
      return "color2"
    }
  }

  ShowSomeData() {
    alert("Hello World!!!")
  }
}
