import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    hi :)
    <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class AppComponent {
  title = 'heroesApp';
}
