import { Component, OnInit } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',  
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  banner = 'assets/banner2.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
