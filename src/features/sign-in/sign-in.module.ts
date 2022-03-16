import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module'



@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SignInRoutingModule
  ]
})
export class SignInModule { }
