import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-picture',
  standalone: true,
  imports: [],
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.css'
})
export class PictureComponent {
  @Input() currentStyle:any
  @Output() random=new EventEmitter<number>();

  selectRandomStyle(index:number){
    this.random.emit(index)
  }
}
