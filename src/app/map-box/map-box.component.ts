import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { CountiesService } from '../counties.service';

/**
 * Structure for the cancer data.
 */
export interface cancerData {
    county: String;
    cases: number;
    case_rate: number;
    deaths: number;
    death_rates: number;
  }

  /**
   * Constructs and displays the map.
   */
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

  constructor(private cs: CountiesService) { };

  ngOnInit() {
    this.buildMap();
  };

  buildMap() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoiam1tYXNzZXkyIiwiYSI6ImNqbnA1bzByaTAweTQzcG1iZmFzb3huanIifQ.XpnPcIFiUfJOwhkqA_UX2w';
    let data: cancerData[];
    this.cs.getCountyCancer(0).subscribe((cData: cancerData[]) => {data=cData});
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
            var county: cancerData = MapBoxComponent.findCounty(data, feature.properties.NAME.toString())

            // Display a popup with the name of the county
            popup.setLngLat(e.lngLat)
                .setHTML(feature.properties.NAME + ' - 2010<br>cases: ' 
                    + county.cases + '<br>deaths: ' + county.deaths)
                .addTo(map);
        });

        map.on('click', 'counties', function(e) {
            var feature = e.features[0];

            console.log("click");

            //map.setPaintProperty("counties", 'fill-color', "#6e599f");
        });
        
        map.on('mouseleave', 'counties', function() {
            map.getCanvas().style.cursor = '';
            popup.remove();
            map.setFilter('counties-highlighted', ['in', 'NAME', '']);
            this.overlay.style.display = 'none';
        });
    });	
  }

  /**
   * Finds the county by name and returns the object.
   * 
   * @param dataList The list of data.
   * @param c The name of the county.
   */
  static findCounty(dataList: cancerData[], c: string) {
    //let regex = new RegExp('^[0-9:]* *' + c);
    for(var i = 0; i < dataList.length; i++) {
      //console.log(dataList[i].county + " " + i);
      if(dataList[i].county.toString() == c) {
        return dataList[i];
      }
    }
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////
  
    
    

}
