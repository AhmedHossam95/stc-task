import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent implements OnInit {
  platform: any;
  panelOpenState = false;
  currentWorkSpace: any;

  workspaces = [
    {
      value: 0,
      viewValue: 'GCEO Workspaces',
      letter: 'G'
    },
    {
      value: 1,
      viewValue: 'Dobox Workspaces',
      letter: 'D'
    },
    {
      value: 2,
      viewValue: 'DataHub Workspaces',
      letter: 'H'
    }
  ]
  constructor() { }

  ngOnInit(): void {
    if (!this.platform) {
      this.platform = {
        name: 'HUB Road Map',
        description: 'Manage all the tasks in your platform',
        members: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpln1I3hZ_A83B8Z92r7hmJ4nu2VPgA3XR4w&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpln1I3hZ_A83B8Z92r7hmJ4nu2VPgA3XR4w&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpln1I3hZ_A83B8Z92r7hmJ4nu2VPgA3XR4w&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpln1I3hZ_A83B8Z92r7hmJ4nu2VPgA3XR4w&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpln1I3hZ_A83B8Z92r7hmJ4nu2VPgA3XR4w&usqp=CAU',
        ],
        categories: [
          {
            categoryName: 'innovation bar',
            tasks: [
              {
                taskDescription: 'this task is assigned to all members in this platform',
                members: [
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpln1I3hZ_A83B8Z92r7hmJ4nu2VPgA3XR4w&usqp=CAU',
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpln1I3hZ_A83B8Z92r7hmJ4nu2VPgA3XR4w&usqp=CAU',
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpln1I3hZ_A83B8Z92r7hmJ4nu2VPgA3XR4w&usqp=CAU',
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpln1I3hZ_A83B8Z92r7hmJ4nu2VPgA3XR4w&usqp=CAU',
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpln1I3hZ_A83B8Z92r7hmJ4nu2VPgA3XR4w&usqp=CAU',
                ],
              }
            ]
          }
        ]
      }
    }
    this.setDefaultWorkspace();
  }

  setDefaultWorkspace() {
    this.currentWorkSpace = this.workspaces[0];
  }
}
