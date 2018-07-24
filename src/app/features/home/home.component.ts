import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { VgAPI } from 'videogular2/core';
import { Subscriber } from 'rxjs';

export class VideoType {
  id: number;
  description: string;
}

export class SourceItem {
  src: string;
  type: string;
}

export interface IMedia {
  title: string;
  src: string;
  type: string;
}

export class MediaItem implements IMedia {
  title: string;
  src: string;
  type: string;
}

//https://videogular.github.io/videogular2/docs/getting-started/
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('media') videoplayer: any;
  public sourceStr: string = "";
  public videoSource: string;
  public videoType: string = "video/mp4";
  public videoTypes: VideoType[] = [];

  //   <video controls> 
  //   <source src=http://techslides.com/demos/sample-videos/small.webm type=video/webm> 
  //   <source src=http://techslides.com/demos/sample-videos/small.ogv type=video/ogg> 
  //   <source src=http://techslides.com/demos/sample-videos/small.mp4 type=video/mp4>
  //   <source src=http://techslides.com/demos/sample-videos/small.3gp type=video/3gp>
  // </video>
  //public api: VgAPI;


  sources: SourceItem = new SourceItem;

  constructor(private router: Router, public sanitiser: DomSanitizer) { }

  ngOnInit() {

    this.sources = new SourceItem();
    this.sources.src = "http://static.videogular.com/assets/videos/videogular.mp4";
    this.sources.type = "video/mp4";




    this.videoTypes = [];
    let video: VideoType = new VideoType();
    video.id = 1;
    video.description = "video/ogg";
    this.videoTypes.push(video);

    video = new VideoType();
    video.id = 2;
    video.description = "video/mp4";
    this.videoTypes.push(video);

    video = new VideoType();
    video.id = 3;
    video.description = "video/webm";
    this.videoTypes.push(video);
    this.videoSource = this.sourceStr;
    //this.submitSource();
  }

  submitSource() {

    let newItem:IMedia = new MediaItem();
    newItem.src = this.sourceStr;
    newItem.title = "New_" + this.videoType + "_"  + this.playlist.length.toString() ;
    newItem.type = this.videoType;
    this.playlist.push(newItem);



    // this.currentIndex = 4;
    // this.currentItem = newItem;


  //   alert('here');
  //   this.api.getDefaultMedia().currentTime = 0;
  //   this.sources = new SourceItem();
  //   this.sources.src = 'http://techslides.com/demos/sample-videos/small.mp4';
  //   this.sources.type = "video/mp4";

   

  // alert('here1');

    //this.videoSource = this.sourceStr;
    //this.api.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
    //this.videoSource = "";
    //this.videoSource = this.sourceStr;
    //this.api.play();
    //this.videoSource = this.sanitiser.bypassSecurityTrustUrl(this.sourceStr);
    //this.videoplayer.nativeElement.play();
  }



  
  // onPlayerReady(api: VgAPI) {
  
  //   this.api = api;
  //   this.api.getDefaultMedia().subscriptions.ended.subscribe(
  //     () => 
  //     {
  //       this.api.getDefaultMedia().currentTime = 0;
       

  //     }
      
  // );
   


  // }


  // nextVideo() {


  //   this.videoSource = this.sourceStr;
  // }

  // playVideo() {
  //   this.api.play();
  // }



  changeRoute(routeDesc) {
    this.router.navigate([routeDesc]);
  }



  toggleVideo(event: any) {
    //this.videoplayer.play();
    alert('playing');
    this.videoplayer.nativeElement.play();
  }


//-----------------------------------------


playlist: Array<IMedia> = [
  {
      title: 'Pale Blue Dot',
      src: 'http://static.videogular.com/assets/videos/videogular.mp4',
      type: 'video/mp4'
  },
  {
      title: 'Big Buck Bunny',
      src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
      type: 'video/mp4'
  },
  {
      title: 'Elephants Dream',
      src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
      type: 'video/mp4'
  }
];

currentIndex = 0;
currentItem: IMedia = this.playlist[ this.currentIndex ];
api: VgAPI;

  onPlayerReady(api: VgAPI) {
    this.api = api;

    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    this.api.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
}

nextVideo() {
    this.currentIndex++;

    if (this.currentIndex === this.playlist.length) {
        this.currentIndex = 0;
    }

    this.currentItem = this.playlist[ this.currentIndex ];
}

playVideo() {
    this.api.play();
}

onClickPlaylistItem(item: IMedia, index: number) {
    this.currentIndex = index;
    this.currentItem = item;
}




}
