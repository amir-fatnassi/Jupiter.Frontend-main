import { Component, OnInit } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  banner = 'assets/banner2.jpg';
  user = {
    email: "",
    password: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  signin(){
    console.log(this.user)
  }
}
