import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
    
    declarations: [CategoriesComponent,SearchPipe,  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ],
})
export class CategoriesModule {}
