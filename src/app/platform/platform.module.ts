import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformComponent } from './platform.component';
import { MaterialModule } from '../core/material.module';
import { PlatformsListComponent } from '../platforms/platforms-list/platforms-list.component';
import { PlatformHeaderCardComponent } from './platform-header-card/platform-header-card.component';


@NgModule({
  declarations: [
    PlatformComponent,
    PlatformsListComponent,
    PlatformHeaderCardComponent
  ],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    MaterialModule
  ]
})
export class PlatformModule { }
