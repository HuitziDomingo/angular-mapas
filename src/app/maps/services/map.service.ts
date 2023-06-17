import { Injectable } from '@angular/core'
import { LngLatLike, Map } from 'mapbox-gl'

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?: Map


  get isMapReady(): boolean {
    return !!this.map
  }


  setMap(map: Map): void {
    this.map = map
  }


flyTo(coordinate: LngLatLike): void {
  if(!this.isMapReady) throw new Error('El mapa no esta actualizado.')

  this.map?.flyTo({
    zoom: 14,
    center: coordinate
  })
}


}
