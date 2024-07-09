import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
    <p>
      layout-page works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class LayoutPageComponent {

}
