import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() layoutType = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  activeFullscreenModal(type) {
    this.layoutType.emit(type);
  }
}
