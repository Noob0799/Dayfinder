import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  selectedDay;
  selectedMonth;
  selectedYear;
  presentYear: number;
  reqDay;
  constructor() {
    this.reqDay = 'Day will be displayed here.';
    this.presentYear = new Date().getFullYear();
    console.log('Year', this.presentYear);
   }

  ngOnInit() {
  }

  dayclick(event) {
    console.log(event.target.value);
  }
  search() {
    const dayref = document.getElementById('day');
    this.selectedDay = (dayref as HTMLSelectElement).options[(dayref as HTMLSelectElement).selectedIndex].value;
    console.log('Day', this.selectedDay);
    const monthref = document.getElementById('month');
    this.selectedMonth = (monthref as HTMLSelectElement).selectedIndex;
    console.log('Month', this.selectedMonth);
    const yearref = document.getElementById('year');
    this.selectedYear = (yearref as HTMLInputElement).value;
    console.log('Year', this.selectedYear);
    this.calculate();
  }

  calculate() {
    const k = this.selectedDay;
    let m = (this.selectedMonth + 11 ) % 12;
    if (m === 0) {
      m = 12;
    }
    let D = this.selectedYear % 100;
    if (this.selectedMonth < 2 ) {
      D = (this.selectedYear - 1) % 100;
    }
    let temp;
    temp = this.selectedYear / 100;
    const C = Math.floor(temp);
    console.log(k, Math.floor((13 * m - 1 ) / 5), D, Math.floor(D / 4), Math.floor(C / 4), 2 * C);
    let f = parseInt(k, 10) + (Math.floor((13 * m - 1 ) / 5)) + D + (Math.floor(D / 4)) + (Math.floor(C / 4)) - (2 * C);
    console.log(f);
    let r;
    if (f < 0) {
      f = -f;
      r = f % 7;
      r = 7 - r;
    } else {
      r = f % 7;
    }
    this.reqDay = this.week[r];
    console.log('Day', this.reqDay);
  }

  clear() {
    const dayref = document.getElementById('day');
    (dayref as HTMLSelectElement).value = (dayref as HTMLSelectElement).options[0].value;
    const monthref = document.getElementById('month');
    (monthref as HTMLSelectElement).value = (monthref as HTMLSelectElement).options[0].value;
    const yearref = document.getElementById('year');
    (yearref as HTMLInputElement).value = this.presentYear.toString();
    this.reqDay = 'Day will be displayed here.';
  }
}
