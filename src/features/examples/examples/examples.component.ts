import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'jptr-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean> | undefined;

  examples = [
    { link: 'todos', label: 'jptr.examples.menu.todos' },
    { link: 'stock-market', label: 'jptr.examples.menu.stocks' },
    { link: 'theming', label: 'jptr.examples.menu.theming' },
    { link: 'crud', label: 'jptr.examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'jptr.examples.menu.simple-state-management'
    },
    { link: 'form', label: 'jptr.examples.menu.form' },
    { link: 'notifications', label: 'jptr.examples.menu.notifications' },
    { link: 'elements', label: 'jptr.examples.menu.elements' },
    { link: 'authenticated', label: 'jptr.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
