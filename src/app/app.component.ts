import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private iconRegister: MatIconRegistry, private domSanitizer: DomSanitizer) {

    this.iconRegister.addSvgIcon('logo', this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/hub.svg")).addSvgIcon('dots', this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/dots.png"));
  }
}
