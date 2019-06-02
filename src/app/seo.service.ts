import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta, private title: Title) { }

  addTitle(title: string) {
    this.title.setTitle(title);
  }
  addMetatags(describe: string,  ogurl: string, ogtype: string, ogtitle: string,
      ogdescribe: string, ogimage: string, ) {
    this.meta.updateTag({name: 'description', content: describe});
    this.meta.updateTag({name: 'robots', content: 'index, follow'});
    this.meta.updateTag({property: 'og:site_name', content: 'Nest Homecare บริการหาคนดูแลผู้สูงอายุที่บ้าน'});
    this.meta.updateTag({property: 'og:url', content: ogurl});
    this.meta.updateTag({property: 'og:type', content: ogtype});
    this.meta.updateTag({property: 'og:title', content: ogtitle});
    this.meta.updateTag({property: 'og:image:secure_url', content: ogimage});
    this.meta.updateTag({property: 'og:image', content: ogimage});
    this.meta.updateTag({property: 'og:description', content: ogdescribe});
    this.meta.updateTag({property: 'og:type', content: ogtype});


  }
}
