import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
    <h1>Hero layout</h1>

    <router-outlet></router-outlet>

    <h5>footer</h5>
  `,
  styles: ``
})
export class LayoutPageComponent {

}
