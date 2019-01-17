import { Component, Input, Renderer } from '@angular/core';
import { ListingService } from '../../providers/listing-service';
import { ImgLoaderComponent } from 'ionic-image-loader';
import { NavController } from 'ionic-angular';
import { Listing } from '../../models/listing';

@Component({
  selector: 'info-window',
  templateUrl: 'info-window.html'
})
export class InfoWindowComponent {

  @Input() place: Listing;
  @Input() location;

  constructor(private renderer: Renderer, private navCtrl: NavController) {
  }

  onImageLoad(imgLoader: ImgLoaderComponent) {
    this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
  }

  goToPlace() {
    this.navCtrl.push('PlaceDetailPage', { place: this.place });
  }

}
