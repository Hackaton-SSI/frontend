import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-fullscreen',
  templateUrl: './modal-fullscreen.component.html',
  styleUrls: ['./modal-fullscreen.component.scss'],
})
export class ModalFullscreenComponent implements OnInit {
  layoutType = 'favorite';
  favorites = [
    {
      name: 'Todos Juntos',
      address: 'Av Carlos Ribeiro, 5670 - Boa Vista, São Paulo - SP',
      isFavorited: true,
      layoutType: 'favorite',
    },
    {
      name: 'Não à fome',
      address: 'Rua Marechal Francisco, 12 - Santa Paula, São Paulo - SP',
      isFavorited: true,
      layoutType: 'favorite',
    },
    {
      name: 'Mais fortes!',
      address: 'Parque Chico Bento, 466 - São Gonçalo, São Paulo - SP',
      isFavorited: true,
      layoutType: 'favorite',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
