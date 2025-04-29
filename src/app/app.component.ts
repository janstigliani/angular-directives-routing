import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SuperButtonDirective } from './directives/super-button/super-button.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SuperButtonDirective, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'directivesAndRouting';
}
