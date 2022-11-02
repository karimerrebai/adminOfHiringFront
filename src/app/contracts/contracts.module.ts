import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractsComponent } from './contracts.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContractsComponent
  ],
  imports: [
    CommonModule,
    ContractsRoutingModule, 
    ReactiveFormsModule
  ]
})
export class ContractsModule { }
