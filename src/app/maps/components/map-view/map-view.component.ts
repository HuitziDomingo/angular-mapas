import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core'
import { PlacesService, MapService } from '../../services'
import { Map, Popup, Marker } from 'mapbox-gl'

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor(
    private readonly placesService: PlacesService,
    private readonly mapService: MapService,
  ) { }

  ngAfterViewInit(): void {
    if (!this.placesService.useLocation) throw new Error('No existe la ubicacion en el mapa.')

    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placesService.useLocation, // starting position [lng, lat]
      zoom: 15, // starting zoom
    })


    let popup = new Popup().
      setHTML(`
      <h6>Mi ubicacion.</h6>
    `)

    new Marker({ color: 'red', }).
      setLngLat(this.placesService.useLocation).
      setPopup(popup).
      addTo(map)


    this.mapService.setMap(map)

  }



}
