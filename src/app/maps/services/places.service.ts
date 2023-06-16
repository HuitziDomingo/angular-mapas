import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation: [number, number] | undefined

  get isUserLocationReady(): boolean {
    return !!this.useLocation
  }


  constructor() {
    this.getUserLocation()
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise<[number, number]>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.useLocation = [coords.longitude, coords.latitude]
          resolve(this.useLocation)
        },
        (error) => {
          alert('No se pudo obtenr la geolocalización')
          console.log(error)
          reject()
        }
      )
    })
  }



}
