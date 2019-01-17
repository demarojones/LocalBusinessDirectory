import { Injectable } from '@angular/core';
import {Category} from '../models/category';

@Injectable()
export class CategoryService {

  load(): Promise<Category> {
    return new Promise((resolve, reject) => {
      
    });
  }

  //Number of places in this category
  get placeCount() {
    return 5;
  }

}
