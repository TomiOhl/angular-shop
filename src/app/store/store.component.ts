import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  title = 'Store';
  cloudElements: any[];
  // dataObserver: Subscription | null = null;

  constructor(private router: Router, private afs: AngularFirestore) {
    this.cloudElements = [];
  }

  refreshDb() {
    this.cloudElements = [];
    this.afs
      .collection(
        environment.collections.goods /*(ref) =>
        ref.where('id', '==', 'valami').orderBy('value', 'desc')*/
      )
      .get()
      .subscribe((res) => {
        res.docs.forEach((doc) => {
          const data = doc.data() as object;
          this.cloudElements.push(data);
        });
      });
  }

  ngOnInit(): void {
    this.refreshDb();
  }
}
