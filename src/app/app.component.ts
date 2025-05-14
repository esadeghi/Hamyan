import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LanguageSelectorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hamyan';
}
