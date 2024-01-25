import { Component, EventEmitter, Input, Output } from '@angular/core';
import { alphacaParts, styles } from '../data';

@Component({
  selector: 'app-opts',
  standalone: true,
  imports: [],
  templateUrl: './opts.component.html',
  styleUrl: './opts.component.css'
})
export class OptsComponent {
  @Output() selectedStyle = new EventEmitter<number>();
  @Output() selectedOpt = new EventEmitter<number>();

  currentOptIndex=0

  setCurrentOptIndex(index:number){
    this.currentOptIndex=index
    this.currentStyles=styles[this.currentOptIndex]
    this.selectedOpt.emit(index)
  }
  setCurrentStyleIndex(index:number){
    this.selectedStyle.emit(index)
  }
  opts=alphacaParts
  currentStyles=styles[this.currentOptIndex]
}
