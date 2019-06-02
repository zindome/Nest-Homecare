import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  title = 'เนสท์ โฮมแคร์ หางานดูแลผู้สูงอายุกับเรา มีงานรอคุณอยู่ตลอด';
  describe = 'สนใจหางานกับเรา สมัครเลย เพียงกรอกฟอร์มเพียง3นาที แล้วรอรับงานที่คุณต้องการได้เลย';
  ogurl = 'https://nestcarejob.com/job';
  ogtype = 'website';
  ogtitle = 'เนสท์ โฮมแคร์ หางานดูแลผู้สูงอายุกับเรา มีงานรอคุณอยู่ตลอด';
  ogdescribe = 'สนใจหางานกับเรา สมัครเลย เพียงกรอกฟอร์มเพียง3นาที แล้วรอรับงานที่คุณต้องการได้เลย';
  ogimage = 'https://nestcarejob.com/assets/regist-caregiver.jpg';

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.addTitle(this.title);
    this.seo.addMetatags(this.describe, this.ogurl, this.ogtype, this.ogtitle, this.ogdescribe, this.ogimage);
  }

}
