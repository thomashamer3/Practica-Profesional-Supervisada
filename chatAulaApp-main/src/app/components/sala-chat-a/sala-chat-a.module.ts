import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaChatAPageRoutingModule } from './sala-chat-a-routing.module';

import { SalaChatAPage } from './sala-chat-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaChatAPageRoutingModule    
  ],
  declarations: [SalaChatAPage]
})
export class SalaChatAPageModule {}
