import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {
  platform: any;
  constructor() {
  }

  ngOnInit(): void {
    this.platform = window.history.state['platform'];
    console.log(this.platform);
  }


}
