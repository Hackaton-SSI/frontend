import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss'],
})
export class EntityCardComponent implements OnInit {
  @Input() data;

  isOpen: boolean = false;
  isFavorited: boolean = true;

  favoriteList = [
    {
      isFavorited: true,
    },
    {
      isFavorited: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  open() {
    this.isOpen = !this.isOpen;
  }

  favoriteEntity() {
    this.isFavorited = !this.isFavorited;
    if (this.isFavorited) {
      document.getElementById('favorite-icon').style.color = '#ccc';
    } else {
      document.getElementById('favorite-icon').style.color = 'red';
    }
  }
}
