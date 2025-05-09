import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  languages = ['fa', 'en', 'fr'];
  currentLang = 'en';
  langLabels = { fa: 'فارسی', en: 'English', fr: 'Français' };

  constructor(private translate: TranslateService) {
    this.setLanguage(this.currentLang);
  }

  setLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
  }
}