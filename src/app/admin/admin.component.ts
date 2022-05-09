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
  inventory: any[];

  constructor(private router: Router, private afs: AngularFirestore) {
    this.orderItems = [];
    this.inventory = [];
  }

  modifyItem(el: any) {
    alert('TODO');
  }

  deleteItem(el: any) {
    alert('TODO');
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

    this.inventory = [];
    this.afs
      .collection(environment.collections.goods)
      .get()
      .subscribe((res) => {
        res.docs.forEach((doc) => {
          const data = doc.data() as object;
          this.inventory.push(data);
        });
      });
  }

  ngOnInit(): void {
    this.refreshDb();
  }
}
