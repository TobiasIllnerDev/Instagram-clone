import { Component } from '@angular/core';

interface Post {
  name:string;
  img:string;
  likes:number;
}

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  posts: Post[] = [
    {
      name: 'Tobias',
      img: './img/athapap-beach-6514331_640.jpg',
      likes: 123,
    },
    {
      name: 'Monika',
      img: './img/tommy_rau-boat-4344483_640.jpg',
      likes: 42,
    },
    {
      name: 'Peter',
      img: './img/felix_w-vines-4520513_640.jpg',
      likes: 246,
    },
  ]
}
