import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {}