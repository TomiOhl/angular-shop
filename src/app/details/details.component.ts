import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id = '';
  displayData: any = {};
  comments: any[];
  author = '';
  commentText = '';

  constructor(private route: ActivatedRoute, private afs: AngularFirestore) {
    this.comments = [];
  }

  addComment() {
    this.afs
      .collection(environment.collections.comments)
      .add({
        item: this.id,
        author: this.author,
        content: this.commentText,
      })
      .then((res) => {
        this.getComments();
        this.author = '';
        this.commentText = '';
      })
      .catch((error) => {
        console.log('save error', error);
      });
  }

  deleteComment(el: any) {
    if (confirm('Are you sure you want to delete this comment?')) {
      // TODO
    }
  }

  getComments() {
    this.comments = [];
    this.afs
      .collection(
        environment.collections.comments //, (ref) => ref.where('item', '==', this.id)
      )
      .get()
      .subscribe((res) => {
        res.docs.forEach((doc) => {
          const data = doc.data() as any;
          if (data.item == this.id) this.comments.push(data);
        });
      });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.id = params.get('id')!;
        this.displayData = history.state.data;
        this.getComments();
      },
      (error) => {
        console.log('parammap error', error);
      }
    );
  }
}
