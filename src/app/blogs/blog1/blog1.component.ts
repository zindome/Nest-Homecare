import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.css']
})
export class Blog1Component implements OnInit {
  title = '5 สิ่งที่ต้องระวังในการดูแลผู้ป่วยติดเตียง';
  describe =
  'เมื่อคนที่เรารักเป็นผู้ป่วยติดเตียง เราจะมีวิธีอย่างไรในการดูแลผู้ป่วยติดเตียง เพื่อให้คนที่เราที่รักมีสุขภาพที่แข็งแรงและยืนยาว';
  ogurl = 'https://nestcarejob.com/blogs/5thing-to-prevent-bedridden';
  ogtype = 'article';
  ogtitle = '5 สิ่งที่ต้องระวังในการดูแลผู้ป่วยติดเตียง';
  ogdescribe =
  'เมื่อคนที่เรารักเป็นผู้ป่วยติดเตียง เราจะมีวิธีอย่างไรในการดูแลผู้ป่วยติดเตียง เพื่อให้คนที่เราที่รักมีสุขภาพที่แข็งแรงและยืนยาว';
  ogimage = 'https://nestcarejob.com/assets/5thing-to-prevent-bedridden.jpg';
  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.addTitle(this.title);
    this.seo.addMetatags(this.describe, this.ogurl, this.ogtype, this.ogtitle, this.ogdescribe, this.ogimage);

  }

}
