import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  variable: boolean = false;
  mail: string = "";
  constructor() {

  }

  onModificarMail(event: Event) {
    this.mail = (<HTMLInputElement>event.target).value;
  }
  activarAlerta() {
    if (this.mail != "") {
      this.variable = true;
    }
    //alert('ya existe un articulo con dicho codigo');

    return this.variable;

  }

  desactivarAlerta() {
    this.variable = false;
    return this.variable;
  }
  ngOnInit() {
  }



}
