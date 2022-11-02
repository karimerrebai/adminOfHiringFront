import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialityRoutingModule } from './speciality-routing.module';
import { SpecialityComponent } from './speciality.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SpecialityComponent],
  imports: [
    CommonModule,
    SpecialityRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SpecialityModule {}
