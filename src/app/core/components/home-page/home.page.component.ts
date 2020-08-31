import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.scss']
})
export class HomePageComponent {
  innerHTML: string = "Hello world!<br/><i>Hello world!</i><br/><b>Hello world!</b><br/>";
}
