import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent implements OnInit {
  public chart: any;
  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("pieChart", {
      type: 'pie', 

      data: {
        labels: [
          'Product 1',
          'Product 2',
          'Product 3'
        ],
        datasets: [{
          label: 'Sales',
          data: [12124, 20469, 32145],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      }
    });}
  }
