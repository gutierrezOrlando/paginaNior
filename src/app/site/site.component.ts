import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  carouselOptions = {
    margin: 25,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  }

  images = [
    {
      text: "Everfresh Flowers",
      image: "assets/images/slide_1.jpg"
    },
    {
      text: "Festive Deer",
      image: "assets/images/slide_2.jpg"
    },
    {
      text: "Morning Greens",
      image: "assets/images/slide_3.jpg"
    },
    {
      text: "Bunch of Love",
      image: "assets/images/slide_4.jpg"
    }
  ]
}
