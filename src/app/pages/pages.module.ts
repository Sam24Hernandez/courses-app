import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';

// Componentes principales
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SearchComponent } from './search/search.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [HomeComponent, ContactoComponent, SearchComponent, PagesComponent],
  exports: [HomeComponent, ContactoComponent, SearchComponent, PagesComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class PagesModule {}
