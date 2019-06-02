import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  title = 'Nest Homecare บริการหาคนดูแลผู้สูงอายุที่บ้าน รับดูแลผู้ป่วยติดเตียง';
  describe = 'เนสท์ โฮมแคร์ รับดูแลผู้ป่วยติดเตียงที่บ้าน รับดูแลผู้สูงอายุที่บ้าน โดยทีมงานมืออาชีพ รวดเร็ว สะดวก';
  ogurl = 'https://nestcarejob.com/home';
  ogtype = 'website';
  ogtitle = 'Nest Homecare บริการหาคนดูแลผู้สูงอายุที่บ้าน รับดูแลผู้ป่วยติดเตียง';
  ogdescribe = 'เนสท์ โฮมแคร์ รับดูแลผู้ป่วยติดเตียงที่บ้าน รับดูแลผู้สูงอายุที่บ้าน โดยทีมงานมืออาชีพ รวดเร็ว สะดวก';
  ogimage = 'https://nestcarejob.com/assets/Nest_Homecare.jpg';

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.addTitle(this.title);
    this.seo.addMetatags(this.describe, this.ogurl, this.ogtype, this.ogtitle, this.ogdescribe, this.ogimage);
  }
}
