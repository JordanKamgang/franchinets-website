import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'franchinets-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  slideshowItem: Array<{name: string, src: string, index: number, show: boolean}> = [
    {name: 'School picture 1', src:'assets/franchinet_img1.jpg', index: 1, show: true},
    {name: 'School picture 2', src:'assets/franchinet_img2.jpg', index: 2, show: false},
    {name: 'School picture 3', src:'assets/franchinet_img3.jpg', index: 3, show: false},
    {name: 'School picture 4', src:'assets/franchinet_img4.jpg', index: 4, show: false},
  ];
  intervalId: any;

  constructor() { }

  ngOnInit(): void {
    this.showSlides();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  showSlides() {
    let dots = document.getElementsByClassName('dot1');
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
