import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.scss'],
})
export class NotificationPageComponent implements OnInit {
  entities = [
    {
      name: 'Todos Juntos',
      address: 'Av Carlos Ribeiro, 5670 - Boa Vista, São Paulo - SP',
      isFavorited: true,
    },
    {
      name: 'Não à fome',
      address: 'Rua Marechal Francisco, 12 - Santa Paula, São Paulo - SP',
      isFavorited: true,
    },
    {
      name: 'Mais fortes!',
      address: 'Parque Chico Bento, 466 - São Gonçalo, São Paulo - SP',
      isFavorited: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
