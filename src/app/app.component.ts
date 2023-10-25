import { Component, VERSION } from '@angular/core';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import { CardComponent } from './card/card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, CardComponent]
})
export class AppComponent {
  version = VERSION.full;
  title = `Angular - ${this.version}`;
}
