import {Component, OnInit, NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CounterStoreActions} from '@root-store/counter-store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.scss']
})
export class IncrementComponent implements OnInit {

  constructor(private store$: Store) { }

  ngOnInit(): void {
  }

  onClick($event: any): void {
    console.log('CounterMainComponent.increment()');
    this.store$.dispatch(CounterStoreActions.Increment());
  }
}

@NgModule({
  exports: [IncrementComponent],
  imports: [
    ButtonModule
  ],
  declarations: [IncrementComponent]
})
export class IncrementModule{ }
