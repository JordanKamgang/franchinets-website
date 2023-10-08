import { Component, OnInit, OnDestroy } from '@angular/core';
import * as translations from 'src/assets/translationsfile.json';
import { HttpClient } from '@angular/common/http';
import { FranchinettranslationService } from 'src/app/services/franchinettranslations/franchinettranslation.service';
import { Language } from 'src/app/interfaces/language';
import { Router } from '@angular/router';

@Component({
  selector: 'franchinets-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit, OnDestroy {
  nav_item: Array<{
    name: string;
    path: string;
    item?: Array<{ name: string; path: string }>;
  }> = [
    { name: 'franchinet_txt_header_home', path: 'home' },
    {
      name: 'franchinet_txt_header_establishment',
      path: 'establishment',
      item: [
        { name: 'franchinet_txt_header_introducing', path: 'introducing' },
        { name: 'franchinet_txt_header_visitSite', path: 'visitSite' },
        { name: 'franchinet_txt_header_ourBenefits', path: 'ourBenefit' },
        { name: 'franchinet_txt_header_ourAssociation', path: 'ourAssociation' },
      ],
    },
    {
      name: 'franchinet_txt_header_praticalInfos',
      path: 'practicalInfos',
      item: [
        { name: 'franchinet_txt_header_contactUs', path: 'contactUs' },
        { name: 'franchinet_txt_header_inscription', path: 'inscritption' },
        { name: 'franchinet_txt_header_priceList', path: 'priceList' },
        { name: 'franchinet_txt_header_internalRules', path: 'internalRule' },
        { name: 'franchinet_txt_header_calendar', path: 'calendar' },
        { name: 'franchinet_txt_header_cafetaria', path: 'cafetaria' },
      ],
    },
    {
      name: 'franchinet_txt_header_nursery',
      path: 'nursery',
      item: [
        { name: 'franchinet_txt_header_nurseryOperation', path: 'nurseryOperation' },
        { name: 'franchinet_txt_header_nurseryOrganization', path: 'nurseryOrganization' },
        { name: 'franchinet_txt_header_personalizedAssistance', path: 'personalizedAssistance' },
      ],
    },
    {
      name: 'franchinet_txt_header_elementary',
      path: 'elementary',
      item: [
        { name: 'franchinet_txt_header_elementaryOperation', path: 'elementaryOperation' },
        { name: 'franchinet_txt_header_elementaryOrganization', path: 'elementaryOrganization' },
        { name: 'franchinet_txt_header_personalizedAssistance', path: 'personalizedAssistance' },
      ],
    },
    {
      name: 'franchinet_txt_header_extracurricular',
      path: 'extracurricular',
      item: [
        { name: 'franchinet_txt_header_daycareOperation', path: 'daycareOperation' },
        { name: 'franchinet_txt_header_daycareOrganization', path: 'daycareOrganization' },
        {
          name: 'franchinet_txt_header_culturalAndSportingActivities',
          path: 'culturalAndSportingActivities',
        },
      ],
    },
    { name: 'franchinet_txt_header_enieg', path: 'enieg' },
    {
      name: 'franchinet_txt_header_language',
      path: 'language',
      item: [
        { name: 'franchinet_txt_header_french', path: '' },
        { name: 'franchinet_txt_header_english', path: '' },
      ],
    },
  ];

  slideshowItem: Array<{name: string, src: string, index: number, show: boolean}> = [
    {name: 'School picture 1', src:'assets/franchinet_img1.jpg', index: 1, show: true},
    {name: 'School picture 2', src:'assets/franchinet_img2.jpg', index: 2, show: false},
    {name: 'School picture 3', src:'assets/franchinet_img3.jpg', index: 3, show: false},
    {name: 'School picture 4', src:'assets/franchinet_img4.jpg', index: 4, show: false},
  ];

  languages: Language[] = [
    { name: 'english', code: 'EN' },
    { name: 'french', code: 'FR' },
  ];
  selectedLanguage: Language = { name: '', code: '' };
  lang: string = '';
  data: any = translations;
  url: string = 'assets/translationsfile.json';
  schoolName = 'franchinet_txt_header_schoolName';
  curentPath = '';
  intervalId: any;

  constructor(
    private http: HttpClient,
    private translationService: FranchinettranslationService,
    private router: Router
  ) {
    this.selectedLanguage = this.languages[1];
    console.log(this.selectedLanguage);
    console.log(this.data);
    this.translationService.language = this.selectedLanguage.code;
  }

  public get currentPath() {
    return this.router.url.replace('/', '');
  }

  onSelectionChange(event: Language) {
    console.log(event);
    console.log(this.router.url);
    this.translationService.language = event.code;
  }

  ngOnInit(): void {
    this.translationService
      .getTranslations(this.selectedLanguage.name)
      .subscribe((res) => {
        console.log(res);
        console.log(this.selectedLanguage);
      });

      this.showSlides();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  showSlides() {
    let dots = document.getElementsByClassName('dot');
    let slideIndex = 0;
    this.intervalId = setInterval(() => {
      if(slideIndex >= this.slideshowItem.length) {
        slideIndex = 0;
      }
      for(let i=0; i < this.slideshowItem.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        this.slideshowItem[i].show = false;
      }
      this.slideshowItem[slideIndex].show = true;
      dots[slideIndex].className += " active";
      slideIndex++;

    }, 3000);
  }


}
