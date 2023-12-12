import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  count = 0;
  availableItem = 10;

  increaseCounter(){

    // If count exceeds the availableItem give user an popup / error
    if(this.count < this.availableItem){
      this.count++
    }
    
    // else{
    //   alert("Only " + this.availableItem + " available")
    // }

    // this.count++ means ->
    // this.count = this.count + 1

    // if you want to multiply you can't say this.count*2
    // this.count = this.count * 2
  }
 
  decreaseCounter(){
    if(this.count > 0){
      this.count--
    }
  
  }

  /***
   * 
   * HW
   * 
   */

  // When you click on + | it should multiply by 2 
  // When you click on - | it should divide by 2 


  /*** 5th Dec 23 */
  // There should be a buy button in html
  // if user clicks on buy the availabeItems should be updated
  // cart / count should become zero

  purchase(){
                         // 10              -     3
    this.availableItem = this.availableItem - this.count
    this.count = 0
  }
  
}
