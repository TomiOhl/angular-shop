import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  title = 'Store';
  orderItems: any[];
  // dataObserver: Subscription | null = null;

  constructor(private router: Router, private afs: AngularFirestore) {
    this.orderItems = [];
  }

  refreshDb() {
    this.orderItems = [];
    this.afs
      .collection(environment.collections.orders)
      .get()
      .subscribe((res) => {
        res.docs.forEach((doc) => {
          const data = doc.data() as object;
          this.orderItems.push(data);
        });
      });
  }

  ngOnInit(): void {
    this.refreshDb();
  }
}
