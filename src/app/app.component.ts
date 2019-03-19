import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

 isHideen:boolean = false;

buttonClick(){
	this.isHideen = !this.isHideen;
}
editclick(){
	console.log("clicked")
}
optionClick(){
		console.log("clicked")
		}

}
