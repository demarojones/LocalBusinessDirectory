import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Listing } from '../../models/listing';

@Component({
  selector: 'page-featured',
  templateUrl: 'featured.html'
})
export class FeaturedPage {
  featuredLocals: Listing[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.featuredLocals = [
      {
        place_id: 'p1',
        name: 'The Blue Vine',
        description: 'The Bluest Vine in town',
        website: 'http://demarojones.com',
        icon: 'map',
        ratingCount: 2,
        ratingTotal: 5,
        types: ['Restaurant'],
        phone: '(423) 504-8347',
        geometry: { location: { lat: 83, lng: 92 } },
        photos: [
          {
            height: 270,
            width: 519,
            photo_reference: 'assets/imgs/placeimg_tech_1.jpg',
            html_attributions: ['hello']
          }
        ],
        formatted_address: '362 Old Charleston Rd, Cleveland, Tennessee, 37311',
        opening_hours: {
          open_now: true,
          weekday_text: ['Mon - Fri 11:00 - 4:30']
        }
      },
      {
        place_id: 'p2',
        name: 'The Grape Vine',
        description: 'The Bluest Vine in town',
        website: 'http://demarojones.com',
        icon: 'map',
        ratingCount: 2,
        ratingTotal: 5,
        types: ['Restaurant'],
        phone: '(423) 504-8347',
        geometry: { location: { lat: 83, lng: 92 } },
        photos: [
          {
            height: 270,
            width: 519,
            photo_reference: 'assets/imgs/placeimg_tech_1.jpg',
            html_attributions: ['hello']
          }
        ],
        formatted_address: '362 Old Charleston Rd, Cleveland, Tennessee, 37311',
        opening_hours: {
          open_now: true,
          weekday_text: ['Mon - Fri 11:00 - 4:30']
        }
      }
    ];
    console.log('ionViewDidLoad FeaturedPage');
  }
}
