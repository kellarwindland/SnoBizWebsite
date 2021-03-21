import { Component, OnInit } from '@angular/core';
declare const myTest: any;

@Component({
  selector: 'app-application-page',
  templateUrl: './application-page.component.html',
  styleUrls: ['./application-page.component.scss']
})
export class ApplicationPageComponent implements OnInit {

  name: string;
  phone: number;
  bdaymonth: string;
  email: string;
  work: string;

  constructor() { }

  ngOnInit(): void {
    myTest();
  }

  processForm() {
    const allInfo = `My name is ${this.name}. My phone is ${this.phone}. My bdaymonth is ${this.bdaymonth}. My email is ${this.email}. My message is ${this.work}`;
    alert(allInfo);
  }

}
