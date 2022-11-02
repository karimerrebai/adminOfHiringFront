import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetRoutingModule } from './forget-routing.module';
import { ForgetComponent } from './forget.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ForgetComponent],
  imports: [CommonModule, ForgetRoutingModule, ReactiveFormsModule],
})
export class ForgetModule {}
