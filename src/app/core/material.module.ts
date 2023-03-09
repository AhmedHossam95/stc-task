import { NgModule } from '@angular/core';

import {
  MatButtonModule
} from "@angular/material/button";
import {
  MatIconModule,
  MatIconRegistry
} from "@angular/material/icon";
import {
  MatToolbarModule
} from "@angular/material/toolbar";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    MatExpansionModule

  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    MatExpansionModule
  ],
  providers: [MatIconRegistry]
})
export class MaterialModule { }
