import { Injectable } from '@angular/core';
import { Listing } from '../models/listing';

@Injectable()
export class ListingService {

  constructor() {
    
  }

  distance(listing: Listing, unit: string = 'km') {
    let location = listing.geometry;
    if (!location) return null;
  }

  like(place: Listing) {

    return new Promise((resolve, reject) => {
      
     });
  }

  isLiked(place: Listing): Promise <boolean> {

    return new Promise((resolve, reject) => {
      
     });
  }

  isStarred(place: Listing): Promise <boolean> {

    return new Promise((resolve, reject) => {
      
     });
  }

  load(params: any = {}): Promise<Listing[]> {

    return new Promise((resolve, reject) => {

    });
  }

  loadFavorites(params: any = {}): Promise<Listing[]> {

    return new Promise((resolve, reject) => {

    });
  }

  

}
