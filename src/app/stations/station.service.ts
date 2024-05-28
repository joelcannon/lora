import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StationService {
  stations: google.maps.marker.AdvancedMarkerElement[];

  constructor() {
    this.stations = this.loadStations();
  }

  getStations(): google.maps.marker.AdvancedMarkerElement[] {
    return this.stations;
  }

  saveStations(markers: google.maps.marker.AdvancedMarkerElement[]): void {
    this.stations = markers;
    const markersJson = JSON.stringify(markers);
    localStorage.setItem('stations', markersJson);
  }

  loadStations(): google.maps.marker.AdvancedMarkerElement[] {
    const markersJson = localStorage.getItem('stations');
    return markersJson ? JSON.parse(markersJson) : [];
  }

  // addStation(position: google.maps.LatLngLiteral): void {
  //   const station = new google.maps.Marker({ position });
  //   this.stations.push(station);
  //   this.saveStations(this.stations);
  // }

  addStation(map: google.maps.Map, position: google.maps.LatLngLiteral): void {
    if (google.maps.marker && google.maps.marker.AdvancedMarkerElement) {
      const station = new google.maps.marker.AdvancedMarkerElement({
        position: new google.maps.LatLng(position.lat, position.lng),
        map: map,
      });

      this.stations.push(station);
      this.saveStations(this.stations);
    } else {
      console.error(
        'AdvancedMarkerElement is not available on google.maps.marker'
      );
    }
  }
}
