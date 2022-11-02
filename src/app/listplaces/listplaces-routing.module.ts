import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListplacesComponent } from './listplaces.component';

const routes: Routes = [{ path: '', component: ListplacesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListplacesRoutingModule { }
