import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { SiteComponent } from './site/site.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { DetalleComponent } from './detalle/detalle.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';

import { OwlModule } from 'ngx-owl-carousel';
import { ServicesComponent } from './services/services.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent,
    SiteComponent,
    TestimoniosComponent,
    DetalleComponent,
    BlogComponent,
    ContactoComponent,
    FooterComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
