import { Injectable } from '@angular/core';
import { Review } from '../models/review';

@Injectable()
export class ReviewService {

  constructor() {
  }

  create(data:any) {
    
  }

  load(params: any = {}): Promise<Review[]> {

    return new Promise((resolve, reject) => {

    });
  }
}
