import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  presidents:string[] = ["Higgins", "McAleese", "Robinson", "Hillery"];
  

  presidents2: object[] =
[{name: "Higgins", term:"2011-"},
{name: "McAleese", term:"1997-2011"},
{name: "Robinson", term:"1990-1997"},
{name: "Hillery", term:"1976-1990"},
{name: "O Dalaigh", term:"1974-1976"}];

  constructor() {
    this.presidents.push("Martin");
   }


  ngOnInit() {
  }

}
