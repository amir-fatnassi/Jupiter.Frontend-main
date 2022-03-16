import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'jptr-big-input',
  templateUrl: './big-input.component.html',
  styleUrls: ['./big-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigInputComponent {
  @Input()
  placeholder = '';

  @Input()
  value = '';

  @Input()
  disabled = false;

  hasFocus = false;
}
