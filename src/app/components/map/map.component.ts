import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  latLgn1 = { lat: -23.57, lng: -46.63 };
  latLgn2 = { lat: -23.62, lng: -46.65 };
  latLgn3 = { lat: -23.55, lng: -46.58 };

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
          center: this.latLgn1,
          zoom: 12,
        }
      );
      this.createMarker(this.latLgn1, 'Todos Juntos');
      this.createMarker(this.latLgn2, 'Não à fome');
      this.createMarker(this.latLgn3, 'Mais fortes!');
    });
  }

  createMarker(latLng, entityName) {
    new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: entityName,
      icon: '../assets/marker.png',
    });
  }
}
