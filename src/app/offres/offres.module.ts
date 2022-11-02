import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffresRoutingModule } from './offres-routing.module';
import { OffresComponent } from './offres.component';


@NgModule({
  declarations: [
    OffresComponent
  ],
  imports: [
    CommonModule,
    OffresRoutingModule
  ]
})
export class OffresModule { }
