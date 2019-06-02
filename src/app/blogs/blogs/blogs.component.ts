import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../../blog.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit, OnDestroy {
  blogs: any;
  subscription: Subscription;
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.subscription = this.blogService.getAllblogs().subscribe(
      allBlogs => {
        this.blogs = allBlogs;
        console.log(allBlogs);
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
