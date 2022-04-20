import { NgModule } from '@angular/core';
import { SideMenuComponent } from '../layout/side-menu/side-menu.component';
import { MainPageComponent } from './main/main-page.component';
import { SamplePageComponent } from './sample-page/sample-page.component';

@NgModule({
  imports: [],
  declarations: [SamplePageComponent],
  exports: [SamplePageComponent]
})
export class PagesModule {}
