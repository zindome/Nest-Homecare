import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.css']
})
export class ConsentComponent implements OnInit {
  title = 'เงื่อนไขการให้บริการสำหรับหาคนดูแลผู้สูงอายุที่บ้าน';
  describe = 'เงื่อนไขการให้บริการโดยรวมที่เกียวข้องกับการหาคนดูแลผู้สูงอายุ รายละเอียดการจ้างงาน';
  ogurl = 'https://nestcarejob.com/consent';
  ogtype = 'website';
  ogtitle = 'เงื่อนไขการให้บริการสำหรับหาคนดูแลผู้สูงอายุที่บ้าน';
  ogdescribe = 'เงื่อนไขการให้บริการโดยรวมที่เกียวข้องกับการหาคนดูแลผู้สูงอายุ รายละเอียดการจ้างงาน';
  ogimage = 'https://nestcarejob.com/assets/Nest_Homecare.jpg';

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.addTitle(this.title);
    this.seo.addMetatags(this.describe, this.ogurl, this.ogtype, this.ogtitle, this.ogdescribe, this.ogimage);
  }

}
