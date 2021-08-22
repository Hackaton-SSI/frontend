import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  myLatLng = { lat: -23.57, lng: -46.63 };

  map: google.maps.Map;

  constructor() {}

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyCZvlyd4qzPPAkvERJwqcFvhQjw4HCtW4M',
    });

    loader.load().then(() => {
      this.map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          center: this.myLatLng,
          zoom: 12,
        }
      );
      this.createMarker();
    });
  }

  createMarker() {
    new google.maps.Marker({
      position: this.myLatLng,
      map: this.map,
      title: 'Hello World!',
      icon: '../assets/marker.png',
    });
  }
}
