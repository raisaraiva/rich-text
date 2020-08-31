import {NgModule} from '@angular/core';
import {HomePageComponent} from './components/home-page/home.page.component';
import {BrowserModule} from '@angular/platform-browser';
import {CoreRoutingModule} from './core.routing.module';
import {CommonModule} from '@angular/common';
import {UIModule} from '../ui/ui.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    CommonModule,
    CoreRoutingModule,
    UIModule
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class CoreModule {
}
