import {Component, NgModule, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CounterStoreActions} from '@root-store/counter-store';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  styleUrls: ['./decrement.component.scss']
})
export class DecrementComponent implements OnInit {

  constructor(private store$: Store) { }

  ngOnInit(): void {
  }

  onClick($event: any): void {
    console.log('CounterMainComponent.decrement()');
    this.store$.dispatch(CounterStoreActions.Decrement());
  }
}

@NgModule({
  exports: [DecrementComponent],
  imports: [
    ButtonModule
  ],
  declarations: [DecrementComponent]
})
export class DecrementModule{ }
