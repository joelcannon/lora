import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 4;

  // constructor() {
  //   // Optionally, you can load the API key dynamically
  //   const script = document.createElement('script');
  //   script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}`;
  //   document.head.appendChild(script);
  // }
}
