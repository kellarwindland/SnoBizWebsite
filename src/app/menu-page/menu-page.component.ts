import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {

  flavors;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("assets/menu.json").subscribe(data =>{
      console.log(data);
      this.flavors = data;
    });
  }

}
