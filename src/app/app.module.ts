import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { HideawayMessageComponent } from './hideaway-message/hideaway-message.component';

@NgModule({
  declarations: [
    HideawayMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
  	HideawayMessageComponent
  ]
 })
export class AppModule { 
	constructor(private injector: Injector){

	}
	ngDoBootstrap(){
		const element = createCustomElement(
			HideawayMessageComponent,
			{ injector: this.injector } 
			);
		customElements.define('hideaway-message', element)
	}
}
