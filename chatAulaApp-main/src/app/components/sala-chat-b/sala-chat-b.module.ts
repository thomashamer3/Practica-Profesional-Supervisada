import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaChatBPageRoutingModule } from './sala-chat-b-routing.module';

import { SalaChatBPage } from './sala-chat-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaChatBPageRoutingModule
  ],
  declarations: [SalaChatBPage]
})
export class SalaChatBPageModule {}
