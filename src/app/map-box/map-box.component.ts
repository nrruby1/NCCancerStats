import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
//import { MapService } from '../map.service';
//import { GeoJson, FeatureCollection } from '../map';

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})
export class MapBoxComponent implements OnInit {

  
  map: mapboxgl.Map;
  style: 'mapbox://styles/mapbox/light-v9';
  center: [-80, 35.2];
  interactive: false;
  minZoom: 5.9;
  maxZoom: 5.9;
  zoom: 5.9;

  constructor() { };

  ngOnInit() {
    this.buildMap();
  };

  buildMap() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoiam1tYXNzZXkyIiwiYSI6ImNqbnA1bzByaTAweTQzcG1iZmFzb3huanIifQ.XpnPcIFiUfJOwhkqA_UX2w';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-80, 35.2],
    interactive: false,
    minZoom: 5.9,
    maxZoom: 5.9,
    zoom: 5.9
    });

    // Create a popup
    var popup = new mapboxgl.Popup({
        closeButton: false
    });
    
    map.on('load', function() {
        // county polygons uploaded as vector tiles
        map.addSource('counties', {
            "type": "vector",
            "url": "mapbox://jmmassey2.ajq1r4q2"
        });
    
        map.addLayer({
            "id": "counties",
            "type": "fill",
            "source": "counties",
            "source-layer": "mygeodata-7hcym5",
            "paint": {
                "fill-outline-color": "rgba(0,0,0,0.1)",
                "fill-color": "rgba(0,0,0,0.1)"
            }
        }, 'place-city-sm'); // Place polygon under these labels.
        
        map.addLayer({
            "id": "counties-highlighted",
            "type": "fill",
            "source": "counties",
            "source-layer": "mygeodata-7hcym5",
            "paint": {
                "fill-outline-color": "#484896",
                "fill-color": "#6e599f",
                "fill-opacity": 0.75
            },
            "filter": ["in", "NAME", ""]
        }, 'place-city-sm'); // Place polygon under these labels.
        
        map.on('mousemove', 'counties', function(e) {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';
    
            // Single out the first found feature.
            var feature = e.features[0];
    
            // Display a popup with the name of the county
            popup.setLngLat(e.lngLat)
                .setText(feature.properties.NAME)
                .addTo(map);
        });
        
        map.on('mouseleave', 'counties', function() {
            map.getCanvas().style.cursor = '';
            popup.remove();
            map.setFilter('counties-highlighted', ['in', 'NAME', '']);
            this.overlay.style.display = 'none';
        });
    });	
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////
  
    
    

}
