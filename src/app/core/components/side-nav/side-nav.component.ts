import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  iconsNames = ['home', 'inbox', 'meeting', 'chat', 'dobox', 'home'];
  selectedIconIndex = 0;
  constructor(private router: Router) { }


  ngOnInit(): void {
  }
  getIconPath(iconName: string): string {
    return `assets/icons/${iconName}.png`;
  }
  selectIcon(index: number) {
    if (this.selectedIconIndex !== index) {
      this.selectedIconIndex = index;
      this.router.navigateByUrl('platform');
    }
  }
}
