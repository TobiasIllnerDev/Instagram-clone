import { Component, Input } from '@angular/core';
import type { Post } from '../main-page';

@Component({
  selector: 'app-single-post',
  imports: [],
  templateUrl: './single-post.html',
  styleUrl: './single-post.scss',
})
export class SinglePost {
  @Input() post!: Post;

  toggleLike() {
    this.post.isLiked = !this.post.isLiked;
    this.post.likes += this.post.isLiked ? 1 : -1;
  }
}
