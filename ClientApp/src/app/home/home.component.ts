import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, Input } from '@angular/core';
import { Donation } from './donation';
import { FormGroup, FormControl } from '@angular/forms';
import { DonationService } from './donation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnChanges {
  constructor(private _donationService: DonationService) { };
 donationModel = new Donation('Alex', 'Wu', 'awu25@yahoo.com', 10, '4111 1111 1111 1111', 0, 0);

  ngOnChanges(changes: SimpleChanges) {
  
  }

  onSubmit() {
    this._donationService.saveDonation(this.donationModel).subscribe((data: Donation) => {
      this.showForm = false;
      this.donationModel = new Donation('', '', '', 0, '', 0, 0)
    },
    (error: any) => console.log(error));
   
  }

  onAmountChange() {
    if (isNaN(this.donationModel.amount)) {
      this.donationModel.fee = 0;
      this.donationModel.total = 0;
    }
    else {
      this.donationModel.fee = Number((this.donationModel.amount * 0.029 + 0.3).toFixed(2));
      this.donationModel.total = this.donationModel.amount + this.donationModel.fee;
    }
  }

  showForm = true;
}
