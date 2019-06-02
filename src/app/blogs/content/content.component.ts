import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { BlogService } from '../../blog.service';
import { SeoService } from '../../seo.service';
import { Oneblog } from '../../oneBlog.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  contents: Oneblog;
  slug: string;

  constructor(private route: ActivatedRoute, private blogService: BlogService, private seo: SeoService) { }

   ngOnInit() {
    this.slug = this.route.snapshot.params.id;
    this.blogService.getOneblog(this.slug).subscribe(
      async blog => {
      this.contents = await blog[0];
      console.log(this.contents.seo.metaTitle);
      this.seo.addTitle(this.contents.seo.metaTitle);
      this.seo.addMetatags(this.contents.intro, this.contents.seo.url, this.contents.seo.ogtype, this.contents.seo.metaTitle,
        this.contents.seo.metaDescription, this.contents.seo.ogImage);
    });
  }

}
