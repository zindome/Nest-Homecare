import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-pricetable',
  templateUrl: './pricetable.component.html',
  styleUrls: ['./pricetable.component.css']
})
export class PricetableComponent implements OnInit {

  title = 'ค่าบริการรายเดือน รายวัน';
  describe = 'อัตราค่าบริการราคาถูกทั้งแบบรายเดือน 20,000 บาท รายวัน 1,600 บาท สามารถเลือกได้ตามต้องการ';
  ogurl = 'https://nestcarejob.com/job';
  ogtype = 'website';
  ogtitle = 'ค่าบริการรายเดือน รายวัน';
  ogdescribe = 'อัตราค่าบริการราคาถูกทั้งแบบรายเดือน 20,000 บาท รายวัน 1,600 บาท สามารถเลือกได้ตามต้องการ';
  ogimage = 'https://nestcarejob.com/assets/Nest_Homecare.jpg';

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.addTitle(this.title);
    this.seo.addMetatags(this.describe, this.ogurl, this.ogtype, this.ogtitle, this.ogdescribe, this.ogimage);
  }


}
