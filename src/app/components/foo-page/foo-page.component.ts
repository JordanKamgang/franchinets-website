import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'franchinets-foo-page',
  templateUrl: './foo-page.component.html',
  styleUrls: ['./foo-page.component.scss']
})
export class FooPageComponent implements OnInit {

  schoolName = 'franchinet_txt_header_schoolName';
  constructor() { }

  ngOnInit(): void {
  }

}
