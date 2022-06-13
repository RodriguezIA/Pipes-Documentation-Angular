import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre = 'EdGAr aLan';
  numero = 10000;
  obj = {
    apellidos: 'Rodriguez Amador'
  }
}
