import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from '../main/sample/sample.component';

const mainRoute: Routes = [
  {
    path: '',
    component: SampleComponent,
    data: {
      pageTitle: 'title.sample',
    },
    outlet: 'sample',
  },
];

@NgModule({
  imports: [RouterModule.forChild(mainRoute)],
  exports: [RouterModule],
})
export class SampleRoutingModule {}