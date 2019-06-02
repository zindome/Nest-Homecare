import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  title = 'ขั้นตอนการชำระเงิน';
  describe = 'เมื่อคุณต้องการหาคนดูแลผู้สูงอายุ หลังจากเลือกคนดูแลได้แล้ว สามารถทำตามขั้นตอนการชำระเงินได้เลย';
  ogurl = 'https://nestcarejob.com/job';
  ogtype = 'website';
  ogtitle = 'ขั้นตอนการชำระเงิน';
  ogdescribe = 'เมื่อคุณต้องการหาคนดูแลผู้สูงอายุ หลังจากเลือกคนดูแลได้แล้ว สามารถทำตามขั้นตอนการชำระเงินได้เลย';
  ogimage = 'https://nestcarejob.com/assets/Nest_Homecare.jpg';

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.addTitle(this.title);
    this.seo.addMetatags(this.describe, this.ogurl, this.ogtype, this.ogtitle, this.ogdescribe, this.ogimage);
  }

}
