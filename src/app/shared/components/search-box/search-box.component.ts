import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  // @ViewChild('txtInput')
  // public txtInput!: ElementRef<HTMLInputElement>;

  @Output()
  public onValue = new EventEmitter();

  @Output()
  public onDebounce = new EventEmitter();

  @Input()
  placeholder: string = '';

  @Input()
  initialValue: string = '';

  ngOnInit(): void {
    this.debouncerSuscription= this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  onEnter(termino: string) {
    // const termino = this.txtInput.nativeElement.value;
    this.onValue.emit(termino);
  }

  onKeyPress(termino: string) {
    // this.onValue.emit(termino);
    this.debouncer.next(termino);
  }
}
