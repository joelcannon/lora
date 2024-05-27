import { Component } from '@angular/core';
import { Feature } from './feature.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lora';
  selectedFeature = Feature.Map;
  Feature = Feature;

  switchView(selectedFeature: Feature) {
    this.selectedFeature = selectedFeature;
  }
}
