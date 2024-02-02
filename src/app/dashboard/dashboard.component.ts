import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { BarChart1Component } from "../bar-chart1/bar-chart1.component";
import { BarChart2Component } from "../bar-chart2/bar-chart2.component";
import { BarChart3Component } from "../bar-chart3/bar-chart3.component";


@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [MatCardModule, PieChartComponent, BarChart1Component, BarChart2Component, BarChart3Component]
})
export class DashboardComponent {
 
  
}
