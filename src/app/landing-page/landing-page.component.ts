import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeroComponent } from '../hero/hero.component';
import { PricingComponent } from '../pricing/pricing.component';
import { FeaturesComponent } from '../features/features.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { FooterComponent } from '../footer/footer.component';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    HeroComponent,
    PricingComponent,
    FeaturesComponent,
    TestimonialsComponent,
    FooterComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {}
