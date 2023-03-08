import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ErrorComponent {
@Input() errorMessage=''
@Output() close=new EventEmitter()
onClose(){
this.close.emit()
}
}
