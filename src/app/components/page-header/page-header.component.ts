import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'franchinets-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  nav_item: Array<{name:string, path:string}> =
  [
    {name:'Home', path: 'home'},
    {name:'About',path:'about'},
    {name:'Contact', path:'contact'},
    {name:'FAQ', path: 'faq'},
    {name:'Help',path:'help'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
