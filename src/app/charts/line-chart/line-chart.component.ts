import { Component, OnInit } from '@angular/core';

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [32, 14, 46, 23, 48, 56], label: 'Sentimental Analysis' },
  { data: [12, 18, 26, 13, 28, 26], label: 'Image Recognition' },
  { data: [52, 36, 49, 52, 78, 63], label: 'Forecasting' }
];

const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const LINE_CHART_COLORS = [
  {
    backgroundColor: 'rgba(6, 214, 160, 0.2)',
    borderColor: 'rgba(0, 200, 140, 0.5)',
    pointBackgroundColor: '#000',
    pointBorderColor: '#000',
    pointHoverBackgroundColor: '#555',
    pointHoverBorderColor: '#555'
  },
  {
    backgroundColor: 'rgba(255, 209, 102, 0.2)',
    borderColor: 'rgba(240, 180, 89, 0.5)',
    pointBackgroundColor: '#000',
    pointBorderColor: '#000',
    pointHoverBackgroundColor: '#555',
    pointHoverBorderColor: '#555'
  },
  {
    backgroundColor: 'rgba(15, 78, 133, 0.2)',
    borderColor: 'rgba(3, 64, 128, 0.5)',
    pointBackgroundColor: '#000',
    pointBorderColor: '#000',
    pointHoverBackgroundColor: '#555',
    pointHoverBorderColor: '#555'
  }
]

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  public lineChartData: any[] = LINE_CHART_SAMPLE_DATA;
  public lineChartLabels: string[] = LINE_CHART_LABELS;
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartColors = LINE_CHART_COLORS;

  constructor() { }

  ngOnInit() {
  }

}
