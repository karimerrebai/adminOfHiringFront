import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistreRoutingModule } from './registre-routing.module';
import { RegistreComponent } from './registre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegistreComponent],
  imports: [
    CommonModule,
    RegistreRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class RegistreModule {}
