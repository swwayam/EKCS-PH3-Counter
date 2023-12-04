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
  count = 1;

  increaseCounter(){
    this.count++
  }
 
  decreaseCounter(){
    if(this.count > 0){
      this.count--
    }
  }

  // When you click on + | it should multiply by 2 
  // When you click on - | it should divide by 2 

}
