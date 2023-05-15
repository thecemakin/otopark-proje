import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import {Feature} from 'ol/';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
@Component({
  selector: 'app-carpark-map',
  templateUrl: './carpark-map.component.html',
  styleUrls: ['./carpark-map.component.scss']
})
export class CarparkMapComponent implements OnInit {
  public map!: Map
  ngOnInit(): void {
      this.map = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
        }),
      ],
      target: 'map',
      view: new View({ 
        center: fromLonLat([28.9879749441319, 41.0488233569155]),
        zoom: 10, 
      }),
        
    });
   
 
 }

}
