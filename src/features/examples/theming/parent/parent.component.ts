import { ROUTE_ANIMATIONS_ELEMENTS } from './../../../../core/animations/route.animations';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'jptr-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
  themeSrc: string = require('!raw-loader!./parent.component.scss-theme.scss')
    .default;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor() {}

  ngOnInit() {}
}
