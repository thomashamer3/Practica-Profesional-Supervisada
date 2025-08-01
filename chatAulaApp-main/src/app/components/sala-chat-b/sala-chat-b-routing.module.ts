import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaChatBPage } from './sala-chat-b.page';

const routes: Routes = [
  {
    path: '',
    component: SalaChatBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaChatBPageRoutingModule {}
