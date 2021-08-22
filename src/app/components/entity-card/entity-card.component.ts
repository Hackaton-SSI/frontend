import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss'],
})
export class EntityCardComponent implements OnInit {
  @Input() data;

  isOpen: boolean = false;
  isFavorited: boolean = false;

  favoriteList = [
    {
      isFavorited: true,
    },
    {
      isFavorited: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }

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
