export class MapModel {
  constructor(
    public center: google.maps.LatLngLiteral = { lat: 40, lng: -100 },
    public zoom: number = 5,
    public mapTypeId: google.maps.MapTypeId = google.maps.MapTypeId.TERRAIN,
    public stations: google.maps.marker.AdvancedMarkerElement[] = []
  ) {}
}
