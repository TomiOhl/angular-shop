import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fill-order',
  templateUrl: './fill-order.component.html',
  styleUrls: ['./fill-order.component.css'],
})
export class FillOrderComponent implements OnInit {
  id = '';
  displayData: any = {};
  quantity = 1;
  name = '';
  address = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) {}

  saveOrder() {
    this.afs
      .collection(environment.collections.orders)
      .add({
        item: this.id,
        name: this.name,
        quantity: this.quantity,
        address: this.address,
      })
      .then((res) => {
        alert('Order successful');
        this.router.navigate(['/store']);
      })
      .catch((error) => {
        console.log('save error', error);
      });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.id = params.get('id')!;
        this.displayData = history.state.data;
      },
      (error) => {
        console.log('parammap error', error);
      }
    );
  }
}
