import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @ViewChild('txtInput')
  public txtInput!: ElementRef<HTMLInputElement>;

  @Output() 
  onValue = new EventEmitter();

  @Input()
  placeholder: string = '';

  onWrite() {
    const termino = this.txtInput.nativeElement.value;
    this.onValue.emit(termino);
  }
}
