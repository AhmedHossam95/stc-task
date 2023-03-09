import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platforms-list',
  templateUrl: './platforms-list.component.html',
  styleUrls: ['./platforms-list.component.scss']
})
export class PlatformsListComponent implements OnInit {
  platforms = [
    {
      letter: 'H',
      name: 'Chat'
    },
    {
      letter: 'I',
      name: 'Inbox'
    }, {
      letter: 'C',
      name: 'HUB Road Map'
    }
    , {
      letter: 'D',
      name: 'Dobox'
    }, {
      letter: 'S',
      name: 'stc profile'
    }, {
      letter: 'M',
      name: 'Meeting'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
