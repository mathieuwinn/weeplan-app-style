import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Chatbot } from './chatbot';

@NgModule({
  declarations: [
    Chatbot,
  ],
  imports: [
    IonicPageModule.forChild(Chatbot),
  ],
  exports: [
    Chatbot
  ]
})
export class ChatbotModule {}
