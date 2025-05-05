import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SuperButtonDirective } from './directives/super-button/super-button.directive';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/authentication/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SuperButtonDirective,CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  title = 'directivesAndRouting';
  authServ = inject(AuthService);

  logOut() {
    this.authServ.isAuth = false;
    }
}
