import { Component, OnInit } from '@angular/core';

import { Order } from '../../shared/order.model';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  public orders: Order[] = [
    {
      id: 1, 
      customer: { id: 1, name: 'Main St Bakery', state: 'TEXAS', email: 'ngsights@example.com' },
      total: 230, 
      placed: new Date(2017, 12, 1), 
      fullfilled: new Date(2017, 12, 2), 
      status: 'Completed'
    },
    {
      id: 1, 
      customer: { id: 1, name: 'Main St Bakery', state: 'TEXAS', email: 'ngsights@example.com' },
      total: 230, 
      placed: new Date(2017, 12, 1), 
      fullfilled: new Date(2017, 12, 2), 
      status: 'Completed'
    },
    {
      id: 1, 
      customer: { id: 1, name: 'Main St Bakery', state: 'TEXAS', email: 'ngsights@example.com' },
      total: 230, 
      placed: new Date(2017, 12, 1), 
      fullfilled: new Date(2017, 12, 2), 
      status: 'Completed'
    },
    {
      id: 1, 
      customer: { id: 1, name: 'Main St Bakery', state: 'TEXAS', email: 'ngsights@example.com' },
      total: 230, 
      placed: new Date(2017, 12, 1), 
      fullfilled: new Date(2017, 12, 2), 
      status: 'Completed'
    },
    {
      id: 1, 
      customer: { id: 1, name: 'Main St Bakery', state: 'TEXAS', email: 'ngsights@example.com' },
      total: 230, 
      placed: new Date(2017, 12, 1), 
      fullfilled: new Date(2017, 12, 2), 
      status: 'Completed'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
