import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PictureComponent } from './picture/picture.component';
import { OptsComponent } from './opts/opts.component';
import {alphacaPart, alphacaParts, styles} from './data'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,PictureComponent,OptsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alphaca-pics';
  style = {
    background:`blue50`,
    neck:`default`,
    eyes:`default`,
    hair:`default`,
    ears:`default`,
    mouth:`default`,
    leg:`default`,
    accessories:`earings`
  }
  currentField='background' as alphacaPart
  currentFieldIndex=0

  styles=styles

  changeStyle(index:number){
    this.style[this.currentField]=styles[this.currentFieldIndex][index]
  }
  changeField(index:number){
    this.currentField=alphacaParts[index] as alphacaPart
    this.currentFieldIndex=index
  }
  changeRandomly(idx:number){
    console.log("calling random")
    let randomNumbers=[];
    for(let style of styles){
      let randomNumber=Math.floor(Math.random()*style.length)
      randomNumbers.push(randomNumber)
    }
    const fields=Object.keys(this.style)
    for(let i=0;i<fields.length;i++){
      const field=fields[i] as alphacaPart
      this.style[field]=styles[i][randomNumbers[i]]
    }
  }
}
