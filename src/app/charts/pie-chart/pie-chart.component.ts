import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public pieChartData: number[] = [350, 450, 120];
  public pieChartLabels: string[] = ['XYZ Logistics', 'Main St Bakery', 'AMC Hosting'];
  public colors: any[] = [
    {
      backgroundColor: ['#26547', '#ff6b6b', '#ffd166']
    }
  ];
  public pieChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
