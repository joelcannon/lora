import { Injectable } from '@angular/core';
import { MapModel } from './map.model';
import { StationService } from '../stations/station.service';
import { Loader } from '@googlemaps/js-api-loader';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private mapData: MapModel;
  public map: google.maps.Map;
  private loader: Loader;

  constructor(private stationService: StationService) {
    this.loader = new Loader({
      apiKey: 'AIzaSyCH4WVQfxX19pOrhARvnRfnic8rStKPItQ',
      version: 'weekly',
    });

    this.loader.load().then(() => {
      console.log('Google Maps API loaded');
      this.mapData = new MapModel({ lat: 39.93459, lng: -93.924026 }, 16);
      console.log('MapModel created', this.mapData);
      this.mapData.stations = this.stationService.getStations();
      console.log('Stations set', this.mapData.stations);
      // this.setMap(this.mapComponent.googleMap);
      this.updateMap();
    });
    console.log('MapService constructor');
    // this.map = new google.maps.Map(document.getElementById('map'), {
    //   // Initialize map
    //   center: this.mapData.center,
    //   zoom: this.mapData.zoom,
    // });
  }

  // async initMap(mapElement: HTMLElement): Promise<void> {
  //   await this.loader.load();
  //   this.map = new google.maps.Map(mapElement, {
  //     center: this.mapData.center,
  //     zoom: this.mapData.zoom,
  //   });
  // }

  getMapData(): MapModel {
    return this.mapData;
  }

  setMap(map: google.maps.Map): void {
    this.map = map;
    console.log('MapService setMap', this.map);
  }

  updateMap() {
    console.log('pre-updateMap', this.map, this.mapData);

    if (this.map && this.mapData) {
      this.map.setCenter(this.mapData.center);
      this.map.setZoom(this.mapData.zoom);
      this.setupClickListener(this.map);
      console.log('MapService updateMap');
      // Update the map with the stations from the MapModel
    }
  }

  // async initMap(): Promise<void> {
  //   // const loader = new Loader({
  //   //   apiKey: 'AIzaSyCH4WVQfxX19pOrhARvnRfnic8rStKPItQ',
  //   //   version: 'weekly',
  //   // });

  //   await this.loader.load();

  //   this.map = new google.maps.Map(document.getElementById('map'), {
  //     center: this.mapData.center,
  //     zoom: this.mapData.zoom,
  //   });
  // }

  // ngOnInit(): void {
  //   // const stations = this.stationService.getStations();
  //   // this.addMarkers(this.map, stations);
  //   // console.log('MapService ngOnInit');
  //   this.mapData = new MapModel({ lat: 39.93459, lng: -93.924026 }, 16);
  //   this.mapData.stations = this.stationService.getStations();
  // }

  // setMap(map: google.maps.Map) {
  //   console.log('MapService setMap');
  //   this.map = map;
  //   this.applyMapConfiguration();
  //   this.setupClickListener(this.map);
  // }

  // applyMapConfiguration() {
  //   this.map.setCenter(this.mapData.center);
  //   this.map.setZoom(this.mapData.zoom);
  // }

  // getMapData(): MapModel {
  //   return this.mapData;
  // }

  // addMarkers(
  //   map: google.maps.Map,
  //   markers: google.maps.marker.AdvancedMarkerElement[]
  // ): void {
  //   markers.forEach((marker) => (marker.map = map));
  // }

  // setupClickListener(map: google.maps.Map): void {
  //   google.maps.event.addListener(map, 'rightclick', (event) => {
  //     const position = { lat: event.latLng.lat(), lng: event.latLng.lng() };
  //     this.stationService.addStation(position);
  //   });
  // }

  setupClickListener(map: google.maps.Map): void {
    console.log('MapService setupClickListener', map);
    map.addListener('rightclick', (event: google.maps.MapMouseEvent) => {
      if (event.latLng) {
        const position = { lat: event.latLng.lat(), lng: event.latLng.lng() };
        this.stationService.addStation(map, position);
      }
    });
  }
}
