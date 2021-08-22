import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  layoutType: string = 'home';
  entities = [
    {
      name: 'Todos Juntos',
      address: 'Av Carlos Ribeiro, 5670 - Boa Vista, São Paulo - SP',
      isFavorited: true,
      layoutType: 'home',
    },
    {
      name: 'Não à fome',
      address: 'Rua Marechal Francisco, 12 - Santa Paula, São Paulo - SP',
      isFavorited: true,
      layoutType: 'home',
    },
    {
      name: 'Mais fortes!',
      address: 'Parque Chico Bento, 466 - São Gonçalo, São Paulo - SP',
      isFavorited: true,
      layoutType: 'home',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  configureLayout(layout: string) {
    this.layoutType = layout;
  }
}
