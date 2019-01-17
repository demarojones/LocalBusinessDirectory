import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AngularFireModule, } from '@angular/fire';
import { AngularFirestoreModule, } from '@angular/fire/firestore';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ImgFallbackModule } from 'ngx-img-fallback';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { StarRatingModule } from 'angular-star-rating';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { SplashScreen } from '@ionic-native/splash-screen';
import { File } from '@ionic-native/file';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
import { GoogleMaps } from '@ionic-native/google-maps';
import { AppVersion } from '@ionic-native/app-version';
import { BrowserTab } from '@ionic-native/browser-tab';
import { HeaderColor } from '@ionic-native/header-color';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { FeaturedPage } from '../pages/featured/featured';
import { FavoritesPage } from '../pages/favorites/favorites';
import { CategoryListPage } from '../pages/category-list/category-list';
import { LocalListingsPage } from '../pages/local-listings/local-listings';
import { SignupPage } from '../pages/signup/signup';
import { ListingDetailPage } from '../pages/listing-detail/listing-detail';

import { IonicImageLoader } from 'ionic-image-loader';
import { CategoryService } from '../providers/categories';
import { ListingService } from '../providers/listing-service';
import { ReviewService } from '../providers/review-service';
import { LocalStorage } from '../providers/local-storage';
import { UserService } from '../providers/user-service';
import { SlideService } from '../providers/slide-service';
import { WindowRef } from '../providers/window-ref';
import { Preference } from '../providers/preference';
import { MapStyle } from '../providers/map-style';

import firebase from 'firebase';
import { AppConfig } from './app.config';

// Initialize Firebase

firebase.initializeApp(AppConfig.FIREBASE_CONFIG);

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    LoginPage,
    TabsPage,
    LocalListingsPage,
    FeaturedPage,
    FavoritesPage,
    CategoryListPage,
    SignupPage,
    ListingDetailPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(AppConfig.FIREBASE_CONFIG),
    AngularFirestoreModule,
    ImgFallbackModule,
    LazyLoadImageModule,
    HttpClientModule,
    StarRatingModule.forRoot(),
    IonicImageLoader.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    LoginPage,
    TabsPage,
    LocalListingsPage,
    FeaturedPage,
    FavoritesPage,
    CategoryListPage,
    SignupPage,
    ListingDetailPage
  ],
  providers: [
    CategoryService,
    ListingService,
    ReviewService,
    LocalStorage,
    UserService,
    SlideService,
    WindowRef,
    StatusBar,
    SplashScreen,
    Preference,
    HeaderColor,
    Geolocation,
    LaunchNavigator,
    CallNumber,
    InAppBrowser,
    SocialSharing,
    GoogleMaps,
    Camera,
    AppVersion,
    BrowserTab,
    File,
    MapStyle, 
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  exports: [LocalListingsPage]
})
export class AppModule {}
