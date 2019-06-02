import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit() {

    this.seoService.addTitle('บทความทั้งหมดที่เกี่ยวข้องกับการดูแลผู้สูงอายุ');
    this.seoService.addMetatags('บทความทางการแพทย์ ที่มีประโยชน์ในการดูแลผู้สูงอายุที่บ้าน', 'https://nestcarejob/blogs',
    'website' , 'บทความทั้งหมดที่เกี่ยวข้องกับการดูแลผู้สูงอายุ', 'บทความทางการแพทย์ ที่มีประโยชน์ในการดูแลผู้สูงอายุที่บ้าน',
    'https://nestcarejob.com/assets/Nest_Homecare.jpg');

}
}
