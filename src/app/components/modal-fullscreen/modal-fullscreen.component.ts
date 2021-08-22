import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-fullscreen',
  templateUrl: './modal-fullscreen.component.html',
  styleUrls: ['./modal-fullscreen.component.scss'],
})
export class ModalFullscreenComponent implements OnInit {
  @Input() type;
  favorites = [
    {
      name: 'Todos Juntos',
      address: 'Av Carlos Ribeiro, 5670 - Boa Vista, São Paulo - SP',
      isFavorited: true,
      layoutType: 'favorite',
    },
  ];

  notifications = [
    {
      name: 'A ação "Todos Juntos" está no ar!',
      address: '',
      categories: ['food', 'coat'],
      layoutType: 'notification',
    },
    {
      name: 'Venha conhecer "Viva junto" e participe dessa ação!',
      address: '',
      categories: ['food', 'coat', 'shelter'],
      layoutType: 'notification',
    },
    {
      name: 'A ação "Para sempre" está de volta, venha visitá-la!',
      address: '',
      categories: ['coat'],
      layoutType: 'notification',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
