import { Component, Renderer, ViewChild } from '@angular/core';
import { Platform, Events, ToastController, AlertController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeaderColor } from '@ionic-native/header-color';

import { TranslateService } from '@ngx-translate/core';
import { ImageLoaderConfig, ImgLoaderComponent } from 'ionic-image-loader';
import { AppConfig } from './app.config';

import { TabsPage } from '../pages/tabs/tabs';
import { LocalStorage } from '../providers/local-storage';
import { Preference } from '../providers/preference';
import { WindowRef } from '../providers/window-ref';
import { UserService } from '../providers/user-service';
import { User } from '../models/user';
import { FeaturedPage } from '../pages/featured/featured';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = TabsPage;
  user: User;
  trans: any;
  private objWindow: any;
  private pages: Array<{ title: string, icon: string, component: any }>;

  constructor(public platform: Platform,
    private renderer: Renderer,
    private events: Events,
    private storage: LocalStorage,
    private translate: TranslateService,
    private toastCtrl: ToastController,
    private preference: Preference,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private windowRef: WindowRef,
    private imageLoaderConfig: ImageLoaderConfig,
    private alertCtrl: AlertController,
    private userService: UserService,
    private headerColor: HeaderColor) {

    this.initializeApp();

  }

  //METHODS

  onMenuOpened() {
    this.events.publish('onMenuOpened');
  }

  onMenuClosed() {
    this.events.publish('onMenuClosed');
  }

  buildMenu() {

    let trans = ['HOME', 'POSTS', 'CATEGORIES', 'MAP', 'ADD_PLACE', 'MY_FAVORITES',
    'SETTINGS', 'LOGIN', 'LOGOUT', 'LOGGED_OUT', 'PROFILE'];

    this.translate.get(trans).subscribe(values => {

      this.trans = values;

      this.pages = [
        { title: values.HOME, icon: 'home', component: 'HomePage' },
        { title: values.CATEGORIES, icon: 'pricetag', component: 'CategoriesPage' },
        { title: values.MAP, icon: 'map', component: 'MapPage' },
        { title: values.ADD_PLACE, icon: 'create', component: 'AddPlacePage' },
        { title: values.POSTS, icon: 'notifications', component: 'PostListPage' },
        { title: values.MY_FAVORITES, icon: 'heart', component: 'FavoritesPage' },
        { title: values.SETTINGS, icon: 'settings', component: 'SettingsPage' },
      ];

      if (UserService.getCurrentUser()) {
        this.pages.push({ title: values.PROFILE, icon: 'contact', component: 'ProfilePage' })
        this.pages.push({ title: values.LOGOUT, icon: 'exit', component: null })
      } else {
        this.pages.push({ title: values.LOGIN, icon: 'log-in', component: 'SignInPage' })
      }

    });
  }

  initializeApp() {
    this.setupLocalStorage();
    this.setupEvents();
    this.setupImageLoader();

    this.user = UserService.getCurrentUser();
    this.fetchUser();

    this.platform.ready().then(() => {
      this.setupStatusBar();
      // this.setupGoogleAnalytics();
      this.setupAndroidHeaderColor();
      this.splashScreen.hide();
    });
  }

  fetchUser() {
    this.user = UserService.getCurrentUser();
  }

  setupImageLoader() {
    this.imageLoaderConfig.enableSpinner(false);
    this.imageLoaderConfig.setFallbackUrl('assets/img/placeholder1.png');
    this.imageLoaderConfig.enableFallbackAsPlaceholder(true);
    this.imageLoaderConfig.setBackgroundSize('cover');
    this.imageLoaderConfig.setConcurrency(20);
  }

  onImageLoad(imgLoader: ImgLoaderComponent) {
    this.renderer.setElementClass(imgLoader.element, 'fade-in', true);  
  }

  setupLocalStorage() {

    this.translate.setDefaultLang(AppConfig.DEFAULT_LANG);

    this.storage.lang.then(val => {

      let lang: any = val || AppConfig.DEFAULT_LANG;

      this.translate.use(lang);
      this.storage.lang = lang;
      this.preference.lang = lang;

      this.storage.skipIntroPage.then((skipIntroPage) => {
        //if (!skipIntroPage) this.rootPage = 'WalkthroughPage';
        if (!skipIntroPage) this.rootPage = TabsPage;
      }).catch((e) => console.log(e));

      this.buildMenu();
    }).catch((e) => console.log(e));

    this.storage.unit.then(val => {
      let unit = val || AppConfig.DEFAULT_UNIT;

      this.storage.unit = unit;
      this.preference.unit = unit;
    }).catch((e) => console.log(e));

  }

  setupEvents() {
    
    this.events.subscribe('user:login', (user) => {
      this.user = user;
      this.buildMenu();
      this.fetchUser();
    });

    this.events.subscribe('user:logout', () => {
      this.onLogOut();
    });

    this.events.subscribe('lang:change', () => {
      this.buildMenu();
    });
  }

  setupStatusBar() {
    if (this.platform.is('ios')) {
      this.statusBar.overlaysWebView(true);
      this.statusBar.styleDefault();
    } else {
      this.statusBar.backgroundColorByHexString(AppConfig.HEADER_COLOR);
    }
  }

  setupAndroidHeaderColor() {
    if (AppConfig.HEADER_COLOR && this.platform.is('android')) {
      this.headerColor.tint(AppConfig.HEADER_COLOR);
    }
  }

  // setupGoogleAnalytics() {
  //   if (AppConfig.TRACKING_ID) {
  //     this.googleAnalytics.startTrackerWithId(AppConfig.TRACKING_ID);
  //     this.googleAnalytics.trackEvent('', 'App opened');
  //     this.googleAnalytics.debugMode();
  //     this.googleAnalytics.enableUncaughtExceptionReporting(true);
  //   }
  // }

  showNotification(notification) {
    this.translate.get(['NOTIFICATION', 'OK']).subscribe(str => {
      this.showAlert(str.NOTIFICATION, notification.alert, str.OK);
    });
  }

  showAlert(title: string = '', message: string = '', okText: string = 'OK') {
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [okText],
    });
    alert.present();
  }

  openPage(page) {

    if ((page.component === 'FavoritesPage' || page.component === 'AddPlacePage' || page.component === 'SignInPage') && !UserService.getCurrentUser()) {

      this.nav.push('SignInPage');

    } else if (page.component === null && UserService.getCurrentUser()) {

      this.onLogOut();

    } else {
      this.nav.setRoot(page.component);
    }
  }

  showToast(message: string = '') {
    
    let alert = this.toastCtrl.create({
      message: message,
      duration: 3000
    });

    alert.present();
  }

  async onLogOut () {

    try {

      await this.userService.logout();
      this.user = null;
      this.nav.setRoot('HomePage');
      this.translate.get('LOGGED_OUT').subscribe(str => this.showToast(str));
      this.buildMenu();

    } catch (err) {
      console.log(err.message);
    }

  }
}
