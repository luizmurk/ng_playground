import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { MainPageComponent } from './pages/main/main-page.component';
import { PagesModule } from './pages/pages.module';
import { SamplePageComponent } from './pages/sample-page/sample-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [MainPageComponent]
})
export class AppModule { }
