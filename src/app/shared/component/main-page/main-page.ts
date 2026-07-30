import { Component, signal } from '@angular/core';
import { Subscribers } from '../subscribers/subscribers';
import { SinglePost } from './single-post/single-post';

export interface Post {
  name: string;
  img: string;
  isLiked: boolean;
  likes: number;
  comments: string[];
}

@Component({
  selector: 'app-main-page',
  imports: [SinglePost, Subscribers],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  readonly posts = signal<Post[]>([
    {
      name: 'Tobias',
      img: './img/athapap-beach-6514331_640.jpg',
      isLiked: false,
      likes: 123,
      comments: ['Was für eine schöne Aussicht!'],
    },
    {
      name: 'Monika',
      img: './img/tommy_rau-boat-4344483_640.jpg',
      isLiked: false,
      likes: 42,
      comments: ['Da möchte ich auch hin.'],
    },
    {
      name: 'Peter',
      img: './img/felix_w-vines-4520513_640.jpg',
      isLiked: false,
      likes: 246,
      comments: [],
    },
  ]);

  toggleLike(postIndex: number): void {
    this.posts.update((posts) =>
      posts.map((post, index) => {
        if (index !== postIndex) {
          return post;
        }

        const isLiked = !post.isLiked;
        return {
          ...post,
          isLiked,
          likes: post.likes + (isLiked ? 1 : -1),
        };
      }),
    );
  }

  addComment(postIndex: number, comment: string): void {
    this.posts.update((posts) =>
      posts.map((post, index) =>
        index === postIndex
          ? { ...post, comments: [...post.comments, comment] }
          : post,
      ),
    );
  }
}
