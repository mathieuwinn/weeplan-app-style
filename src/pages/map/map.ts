import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

/**
 * Generated class for the Map page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class Map {



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  ionViewDidEnter() {


  mapboxgl.accessToken = 'pk.eyJ1IjoiZGJvbm5lYXUiLCJhIjoiY2ozYmU2Mjh3MDAzMDJ3bXF3NXprMml6MyJ9.UGaCP4HmEpcO0N_DfqOK6w';
  var map = new mapboxgl.Map({
     style: 'mapbox://styles/mapbox/light-v9',
     center: [-0.3712, 49.1811],
     zoom: 11,
     pitch: 0,
     minZoom: 7.5, //restrict map zoom - buildings not visible beyond 13
     maxZoom: 17,
     container: 'map'
   });



 }




}
