import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-customerregist',
  templateUrl: './customerregist.component.html',
  styleUrls: ['./customerregist.component.css']
})
export class CustomerregistComponent implements OnInit {
  title = 'แบบฟอร์มลงทะเบียนสำหรับผู้ว';
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
