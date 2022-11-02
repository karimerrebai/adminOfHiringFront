import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListplacesRoutingModule } from './listplaces-routing.module';
import { ListplacesComponent } from './listplaces.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListplacesComponent],
  imports: [CommonModule, ListplacesRoutingModule, ReactiveFormsModule],
})
export class ListplacesModule {}
