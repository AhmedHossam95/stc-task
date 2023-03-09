import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-platform-header-card',
  templateUrl: './platform-header-card.component.html',
  styleUrls: ['./platform-header-card.component.scss']
})
export class PlatformHeaderCardComponent implements OnInit {
  @Input() platform: any;
  tabs = [
    {
      label: 'Kanban',
      route: 'platform/kanban'
    },
    {
      label: 'Main Table',
      route: 'platform/table'
    }, {
      label: 'Dashboard',
      route: 'platform/dashboard'
    },
  ]
  selectedTab = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  selectTab(index: number): void {
    if (this.selectedTab !== index) {
      this.selectedTab = index;
      this.router.navigateByUrl(this.tabs[index].route, {
        state: {
          platform: this.platform
        }
      })
    }
  }

}
