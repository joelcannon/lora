import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { MapComponent } from './map/map.component';
import { StationsComponent } from './stations/stations.component';
import { NodesComponent } from './nodes/nodes.component';
import { LosComponent } from './los/los.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    StationsComponent,
    NodesComponent,
    LosComponent,
    DropdownDirective,
  ],
  imports: [BrowserModule, GoogleMapsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
