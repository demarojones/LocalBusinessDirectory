import { Component } from '@angular/core';

import { FavoritesPage } from '../favorites/favorites';
import { FeaturedPage } from '../featured/featured';
import { CategoryListPage } from '../category-list/category-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FeaturedPage;
  tab2Root = FavoritesPage;
  tab3Root = CategoryListPage;

  constructor() {

  }
}
