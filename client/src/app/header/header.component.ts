import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  btn: any = {
    show: false,
    msg: 'Add',
    icon: 'plus'
  };

  @Output() onBtnClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public btnClick() {
    this.onBtnClick.emit('clicked');
  }

}
