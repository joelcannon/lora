import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { MapComponent } from './map/map.component';
import { StationsComponent } from './stations/stations.component';
import { NodesComponent } from './nodes/nodes.component';
import { LosComponent } from './los/los.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MapComponent, StationsComponent, NodesComponent, LosComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
