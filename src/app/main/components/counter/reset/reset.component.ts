import {Component, NgModule, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CounterStoreActions} from '@root-store/counter-store';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  constructor(private store$: Store) { }

  ngOnInit(): void {
  }

  onClick($event: any): void {
    console.log('CounterMainComponent.reset()');
    this.store$.dispatch(CounterStoreActions.Reset());
  }
}

@NgModule({
  exports: [ResetComponent],
  imports: [
    ButtonModule
  ],
  declarations: [ResetComponent]
})
export class ResetModule{ }
