import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main/main.component';

export const mainRoute: Routes = [
  {
    path: '',
    component: MainComponent,
    data: {
      pageTitle: 'title.main',
    },
    outlet: 'main',
  },
];

@NgModule({
  imports: [RouterModule.forChild(mainRoute)],
  exports: [RouterModule],
})
export class MainRoutingModule {}