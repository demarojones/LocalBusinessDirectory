import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list.html',
})
export class CategoryListPage {
  categories: Category[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.categories = [
      {
        categoryName: 'Food & Drink',
        items: [
          { id: 1, name: 'Restaurants'},
          { id: 2, name: 'Bar'},
          { id: 3, name: 'Coffee'},
          { id: 4, name: 'Brunch'},
          { id: 5, name: 'Dessert'},
          { id: 6, name: 'Delivery'},
          { id: 7, name: 'Take Out'}
        ]
      },
      {
        categoryName: 'Things to do',
        items: [
          { id: 1, name: 'Events'},
          { id: 2, name: 'Parks'},
          { id: 3, name: 'Gyms'},
          { id: 4, name: 'Art'},
          { id: 5, name: 'Attraction'},
          { id: 6, name: 'Live Music'},
          { id: 7, name: 'Movies'}
        ]
      },
      {
        categoryName: 'Shopping',
        items: [
          { id: 1, name: 'Groceries'},
          { id: 2, name: 'Beauty Supplies'},
          { id: 3, name: 'Car Dealers'},
          { id: 4, name: 'Home and Garden'},
          { id: 5, name: 'Electronics'},
          { id: 6, name: 'Sporting Goods'},
          { id: 7, name: 'Convenience Stores'}
        ]
      },
      {
        categoryName: 'Services',
        items: [
          { id: 1, name: 'Hotels'},
          { id: 2, name: 'Car Repair/Maintenance'},
          { id: 3, name: 'Dry Cleaning'},
          { id: 4, name: 'Electric Vehicle Charging'},
          { id: 5, name: 'Mail and Shipping'},
          { id: 6, name: 'Car Wash'},
          { id: 7, name: 'ATMs'}
        ]
      }
  ];
    console.log('ionViewDidLoad CategoryListPage');
  }

  categorySelected(category: any) {
    console.log('selected category = '.concat(category));
  }

}

class Category {
  constructor(parameters) {
    
  }
  categoryName: string;
  items: CategoryItem[];
}

class CategoryItem {
  id: number;
  name: string;
}
