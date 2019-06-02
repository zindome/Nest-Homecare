import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Oneblog } from './oneBlog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private afs: AngularFirestore) { }

  private blogCollection: AngularFirestoreCollection = this.afs.collection('fl_content');

  getAllblogs() {
    return this.blogCollection.valueChanges();
  }
  getOneblog(slug: string) {
    return this.afs.collection<Oneblog>('fl_content', ref => ref.where('slug', '==', slug)).valueChanges();
  }
}
