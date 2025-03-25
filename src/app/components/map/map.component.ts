import { AfterViewInit, Component, Input } from '@angular/core';
import * as Leaflet from 'leaflet'

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit {
  @Input() id!: number;
  private map!: Leaflet.Map;
  @Input() latlng!: Leaflet.LatLngExpression;

  constructor() { }

  ngAfterViewInit(): void {
    this.map = Leaflet.map(`map_${this.id}`, {
      center: this.latlng,
      zoom: 18,
      zoomControl: false,
      attributionControl: false
    });

    const tiles = Leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 15,
    });

    tiles.addTo(this.map);
    Leaflet.marker(this.latlng).addTo(this.map);
  }

}
