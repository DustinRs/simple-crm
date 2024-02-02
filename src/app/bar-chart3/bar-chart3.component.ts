import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-bar-chart3',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart3.component.html',
  styleUrl: './bar-chart3.component.scss'
})
export class BarChart3Component {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('barChart3', {
      type: 'bar', 

      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Sales Product 3',
            data: [
              2432, 2613, 2202, 3021, 1973, 3400, 2288, 2589, 1845, 1904, 2789, 2289
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
              'rgba(255, 123, 87, 0.2)',
              'rgba(98, 177, 71, 0.2)',
              'rgba(221, 46, 68, 0.2)',
              'rgba(128, 0, 128, 0.2)',
              'rgba(0, 128, 0, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
              'rgb(255, 123, 87)',
              'rgb(98, 177, 71)',
              'rgb(221, 46, 68)',
              'rgb(128, 0, 128)',
              'rgb(0, 128, 0)',
            ],
            borderWidth: 1,
          },
        ],
      },
    });
  }
}
