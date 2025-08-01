import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaChatAPage } from './sala-chat-a.page';

const routes: Routes = [
  {
    path: '',
    component: SalaChatAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaChatAPageRoutingModule {}
