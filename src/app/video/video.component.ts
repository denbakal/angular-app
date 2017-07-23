import {Component, OnInit} from '@angular/core';
import {Video} from "./video.model";
import {VideoService} from "./video.service";

@Component({
  selector: 'video',
  templateUrl: 'video.component.html'
})

export class VideoComponent implements OnInit {
  videos: Video[];

  constructor(private videoService: VideoService) {
  }

  ngOnInit() {
    this.videoService.getVideos()
      .subscribe(result => this.videos = result);
  }
}
