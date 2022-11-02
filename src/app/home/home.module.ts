import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LayoutsComponent } from '../layouts/layouts.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, HttpClientModule],
})
export class HomeModule {}
