import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/page-routing.module';
import { SamplePageComponent } from './pages/sample-page/sample-page.component';


@NgModule({
  imports: [PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
