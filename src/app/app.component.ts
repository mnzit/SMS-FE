import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public active: boolean;
  public names: string[] = ["Ritesh", "Aakash", "Manjit"];

  @ViewChild('element')
  public element!: ElementRef<any>;

  constructor() {
    this.title = 'sms';
    this.active = true;

    if ("true") {

    }
  }

  toggleTitle() {
    this.active = this.active ? false : true
  }

  add() {
    this.names.push(this.element.nativeElement.value)
  }
}
