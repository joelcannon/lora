import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// import { GoogleMap } from '@angular/google-maps';
import { MapService } from './map.service';
import { MapModel } from './map.model'; // Adjust the path as needed
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  // @ViewChild(GoogleMap) mapComponent: GoogleMap;
  // @ViewChild('map') mapComponent: GoogleMap;
  @ViewChild(GoogleMap, { static: false }) mapComponent: GoogleMap;

  mapData?: MapModel;

  constructor(public mapService: MapService) {
    this.mapData = this.mapService.getMapData();
  }

  ngAfterViewInit(): void {
    this.mapService.map = this.mapComponent.googleMap;
    console.log('inside ngAfterViewInit', this.mapComponent.googleMap); // Should not be undefined
    this.mapService.setMap(this.mapComponent.googleMap);
    this.mapService.updateMap();

    this.mapComponent.mapInitialized.subscribe((map: google.maps.Map) => {
      this.mapService.setMap(this.mapComponent.googleMap);
      this.mapService.updateMap();
    });
  }

  // onMapsInitialized() {
  //   this.mapService.applyMapConfiguration();
  // }
}
