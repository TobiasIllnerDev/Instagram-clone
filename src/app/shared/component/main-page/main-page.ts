import { Component } from '@angular/core';
import { SinglePost } from './single-post/single-post';

export interface Post {
  name: string;
  img: string;
  isLiked: boolean;
  likes: number;
}

@Component({
  selector: 'app-main-page',
  imports: [SinglePost],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  posts: Post[] = [
    {
      name: 'Tobias',
      img: './img/athapap-beach-6514331_640.jpg',
      isLiked: false,
      likes: 123,
    },
    {
      name: 'Monika',
      img: './img/tommy_rau-boat-4344483_640.jpg',
      isLiked: false,
      likes: 42,
    },
    {
      name: 'Peter',
      img: './img/felix_w-vines-4520513_640.jpg',
      isLiked: false,
      likes: 246,
    },
  ];
}
