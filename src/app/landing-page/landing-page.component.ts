import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeroComponent } from '../hero/hero.component';
import { PricingComponent } from '../pricing/pricing.component';
import { FeaturesComponent } from '../features/features.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeroComponent, PricingComponent, FeaturesComponent, TestimonialsComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  languages = ['fa', 'en', 'fr'];
  currentLang = 'fa';
  langLabels: { [key: string]: string } = { fa: 'فارسی', en: 'English', fr: 'Français' };

  constructor(private translate: TranslateService) {
    this.setLanguage(this.currentLang);
  }

  setLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
  }
}