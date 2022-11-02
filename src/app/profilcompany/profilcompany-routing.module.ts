import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilcompanyComponent } from './profilcompany.component';

const routes: Routes = [{ path: '', component: ProfilcompanyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilcompanyRoutingModule { }
