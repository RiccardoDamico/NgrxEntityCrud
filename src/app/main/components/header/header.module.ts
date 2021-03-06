import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {HamburgerButtonModule} from '@components/hamburger-button/hamburger-button.module';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {IncrementModule} from '@components/counter/increment/increment.component';
import {DecrementModule} from '@components/counter/decrement/decrement.component';
import {ResetModule} from '@components/counter/reset/reset.component';
import {LogoutButtonModule} from '@views/login/components/logout-button/logout-button.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, HamburgerButtonModule, OverlayPanelModule, IncrementModule, DecrementModule, ResetModule, LogoutButtonModule],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
