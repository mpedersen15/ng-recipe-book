import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() pageChanged = new EventEmitter<string>();
  currentPage = 'recipe';

  constructor() { }

  ngOnInit() {
  }

  changePage(newPage: string){
    this.currentPage = newPage;
    this.pageChanged.emit(newPage);
  }

}
