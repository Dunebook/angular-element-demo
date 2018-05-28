import { Component, Input ,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hideaway-message',
  templateUrl: './hideaway-message.component.html',
  styleUrls: ['./hideaway-message.component.css',],
  encapsulation: ViewEncapsulation.Native
})
export class HideawayMessageComponent {

  constructor() { }

  hidden = false;
  btnText = 'Hide'

  hideContent(e){
  	e.preventDefault();
  	this.hidden = !this.hidden;
  	this.btnText = this.btnText == 'Hide' ? 'Show' : 'Hide';
  }

  @Input() content;
  @Input() title;
}
