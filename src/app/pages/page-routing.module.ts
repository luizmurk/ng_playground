import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplePageComponent } from './sample-page/sample-page.component';

const routes: Routes = [ 

  {path: 'sample', component: SamplePageComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
