import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TabService } from '../services/tab.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
})
export class LanguageSelectorComponent {
  languages = ['en', 'fr'];
  currentLang = 'en';
  langLabels: { [key: string]: string } = {
    en: 'English',
    fr: 'Français',
  };

  constructor(
    private translate: TranslateService,
    private tabService: TabService,
    private router: Router
  ) {}

  toggleLanguage() {
    this.currentLang = this.currentLang === 'fr' ? 'en' : 'fr';
    this.translate.use(this.currentLang);
  }

  changeTab(tab: 'login' | 'register') {
    this.tabService.setTab(tab);
    this.router.navigate(['/login']);
  }
}
