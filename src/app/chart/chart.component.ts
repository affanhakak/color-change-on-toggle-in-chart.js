import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

  export class ChartComponent implements OnInit {
    chart: any;
  
    constructor() { }
  
    ngOnInit() {
      this.initializeChart();
    }
  
    initializeChart() {
      this.chart = new Chart("chartCanvas", {
        type: 'line',
        data: {
          labels: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [10, 20, 30, 40, 50, 60, 70],
              borderColor: 'red',
            },
            {
              label: 'Dataset 2',
              data: [40, 30, 20, 10, 15, 29, 67],
              borderColor: 'red',
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }
  
    changeLineColor() {
      const datasets = this.chart.data.datasets;
      datasets.forEach((dataset: { borderColor: string }) => {
        if (dataset.borderColor === 'red') {
          dataset.borderColor = 'blue';
        } else {
          dataset.borderColor = 'red';
        }
      });
      this.chart.update(); // Update the chart to reflect the new line colors
    }
    
    
    
  }
  

  

  





