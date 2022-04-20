import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnComponent } from '../main/learn/learn.component';

const mainRoute: Routes = [
  {
    path: '',
    component: LearnComponent,
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
export class LearnRoutingModule {}