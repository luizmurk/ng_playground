import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './pages/home/main/main/main.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { MainModule } from './pages/home/main.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
