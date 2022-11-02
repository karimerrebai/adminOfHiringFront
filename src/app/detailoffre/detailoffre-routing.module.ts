import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailoffreComponent } from './detailoffre.component';

const routes: Routes = [{ path: '', component: DetailoffreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailoffreRoutingModule { }
