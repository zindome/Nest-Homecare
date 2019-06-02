import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'ข้อมูลติดต่อ Nest Homecare';
  describe = 'ข้อมูลติดต่อ "เนสท์ โฮมแคร์" โทรศัพท์ ไลน์ ที่อยู่สำนักงานใหญ่ ';
  ogurl = 'https://nestcarejob.com/contact';
  ogtype = 'website';
  ogtitle = 'ข้อมูลติดต่อ Nest Homecare';
  ogdescribe = 'ข้อมูลติดต่อ "เนสท์ โฮมแคร์" โทรศัพท์ ไลน์ ที่อยู่สำนักงานใหญ่';
  ogimage = 'https://nestcarejob.com/assets/Nest_Homecare.jpg';

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.addTitle(this.title);
    this.seo.addMetatags(this.describe, this.ogurl, this.ogtype, this.ogtitle, this.ogdescribe, this.ogimage);
  }

}
