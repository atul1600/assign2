import { Component } from '@angular/core';

@Component({
  selector: 'app-dom1',
  templateUrl: './dom1.component.html',
  styleUrls: ['./dom1.component.css']
})
export class Dom1Component  {
chartOptions = {
    responsive: true
  };

  notShow :boolean = false;
  showMe:boolean = false;

  chartData = [
     { data: [330, 600, 260, 700,300,243] },
  ];
  chartLabels = ['January', 'February', 'March', 'April','may','june'];

   onChartClick(event) {
     console.log(event);
   }
   week=['first','second','third','fourth'];

   weekdata=['121','232','221','321',]
  
    showTable(){
        this.showMe = true;

    }

   editclick(){
    this.notShow = !this.notShow;


   }


}
