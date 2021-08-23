import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';


import { UniversalRoutingModule } from './universal-routing.module';
import { UniversalComponent } from './universal.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    UniversalComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UniversalRoutingModule,
    MatButtonModule,
  ]
})
export class UniversalModule { }
