import { Component, OnInit } from '@angular/core';
import * as translations from '../../../assets/translationsfile.json';
import { HttpClient } from '@angular/common/http';
import { FranchinettranslationService } from 'src/app/services/franchinettranslations/franchinettranslation.service';
import { Language } from 'src/app/interfaces/language';

@Component({
  selector: 'franchinets-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  nav_item: Array<{name:string, path:string}> =
  [
    {name:'franchinet_txt_header_home', path: 'home'},
    {name:'franchinet_txt_header_about',path:'about'},
    {name:'franchinet_txt_header_contact', path:'contact'},
    {name:'franchinet_txt_header_faq', path: 'faq'},
    {name:'franchinet_txt_header_help',path:'help'},
    {name:'franchinet_txt_header_language',path:'language'},
  ];

  languages: Language[] = [
    {name: 'english', code: 'EN'},
    {name: 'french', code: 'FR'},
  ]
  selectedLanguage: Language = {name:'', code:''};
  lang: string = '';
  data: any = translations;
  url: string = '../../../assets/translationsfile.json';
  schoolName = 'franchinet_txt_header_schoolName';



  constructor(private http: HttpClient, private translationService: FranchinettranslationService) {
    this.selectedLanguage = this.languages[1];
    console.log(this.selectedLanguage);
    console.log(this.data);
    this.translationService.language = this.selectedLanguage.code;
  }

  onSelectionChange(event: Language) {
    console.log(event);
    this.translationService.language = event.code;
  }

  ngOnInit(): void {
    this.translationService.getTranslations(this.selectedLanguage.name).subscribe((res) => {
      console.log(res);
      console.log(this.selectedLanguage);

    });
  }

}

