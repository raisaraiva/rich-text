import {NgModule} from '@angular/core';
import {RichTextComponent} from './components/rich-text/rich.text.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    RichTextComponent
  ],
  exports: [
    RichTextComponent
  ],
  imports: [
    FormsModule
  ],
  providers: []
})
export class UIModule {
}
