import { Component, Input } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ListingDetailPage } from "../listing-detail/listing-detail";
import { Listing } from "../../models/listing";

@Component({
  selector: "page-local-listings",
  templateUrl: "local-listings.html"
})
export class LocalListingsPage {

  @Input() listings: Listing[];
  isFavorite: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LocalListingsPage");
  }

  like(listing: any) {}

  review(listing: any) {}

  navigate(listing: any) {}

  goToDetails(listing: any) {
    console.log(listing);
    this.navCtrl.push(ListingDetailPage);
  }
}
