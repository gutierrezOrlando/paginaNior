import { Component, OnInit } from '@angular/core';
import { header } from '../header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header: header[] = [new header('Home','home-section'), new header('About','about-section'),new header('Team','home-section'),new header('Services','services-section'),new header('Testimonials','about-section'),new header('Blog','about-section'),new header('Contact','about-section')];

  constructor() { }

  ngOnInit() {
  }
}