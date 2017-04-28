import { Component, OnInit, Input } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-comment-table',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  comments: Array<string>;
  constructor(private testService: TestService) {
    this.comments = [];
  }
  ngOnInit() {

    this.testService.getComments().subscribe(comment => {
      this.comments.push(comment)
    });
  }
}
