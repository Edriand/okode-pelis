import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() buscador = '';

  debouncer: Subject<string> = new Subject();
  termino = '';

  ngOnInit() {
    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe( valor => {
      this.onDebounce.emit( valor );
    } );
  }

  Buscar() {
    this.onEnter.emit( this.termino );
  }

  teclaPresionada() {
    this.debouncer.next( this.termino );
  }
}
