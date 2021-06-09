import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-End-API';

  constructor(private router:Router){}

  Get(){
    this.router.navigate(["get"])
  }
  Post(){
    this.router.navigate(["post"])
  }
}
