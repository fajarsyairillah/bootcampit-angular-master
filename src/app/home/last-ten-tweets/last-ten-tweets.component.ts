import { Component, OnInit } from '@angular/core';
import { ExamplelastTweetModel } from '../model/example.lastTweet.model';
import { TwitterService } from '../service/twitter.service';

@Component({
  selector: 'app-last-ten-tweets',
  templateUrl: './last-ten-tweets.component.html',
  styleUrls: ['./last-ten-tweets.component.css']
})
export class LastTenTweetsComponent implements OnInit {
  data: ExamplelastTweetModel;
  constructor(private twitterService: TwitterService) { }

  ngOnInit(): void {
    this.twitterService.getTenTweetExample()
    .subscribe(value => this.data = value.data);
  }

}
