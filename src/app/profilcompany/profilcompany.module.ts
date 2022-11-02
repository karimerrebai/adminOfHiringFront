import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilcompanyRoutingModule } from './profilcompany-routing.module';
import { ProfilcompanyComponent } from './profilcompany.component';


@NgModule({
  declarations: [
    ProfilcompanyComponent
  ],
  imports: [
    CommonModule,
    ProfilcompanyRoutingModule
  ]
})
export class ProfilcompanyModule { }
