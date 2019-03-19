import { Component } from '@angular/core';

@Component({
  selector: 'app-dom2',
  templateUrl: './dom2.component.html',
  styleUrls: ['./dom2.component.css']
})
export class Dom2Component  {
chartOptions = {
    responsive: true
  };

  chartData = [
     { data: [400,256,452,356,451,523] },
  ];

  chartLabels = ['july', 'Augast', 'septamber', 'octomber','novemeber','december'];

  onChartClick(event) {
    console.log(event);
  }
  week=['1st','2nd','3rd','4th'];
  notShow :boolean = false;

   weekdata=['1111','222','333','444',]
  showMe = false;
    showTable(){
        this.showMe = true;

    }

   editclick(){
    this.notShow = !this.notShow;


   }

}
