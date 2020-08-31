import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'rich-text',
  templateUrl: './rich.text.component.html',
  styleUrls: ['./rich.text.component.scss']
})
export class RichTextComponent implements OnInit {

  @Input()
  innerHTML: string;

  @Output()
  innerHTMLChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  execCommand(command: string) {
    let content: HTMLElement = document.getElementById('content');
    let selection: Selection = document.getSelection();

    if (!selection.toString()) {
      let range = document.createRange();

      range.selectNodeContents(content);
      selection.removeAllRanges();
      selection.addRange(range);
    }

    document.execCommand(command, false, null);

    this.innerHTMLChange.emit(content.innerHTML);
  }
}
