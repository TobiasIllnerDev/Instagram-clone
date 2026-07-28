import { Component, input, output, signal } from '@angular/core';
import type { Post } from '../main-page';

export interface CommentAddedEvent {
  postIndex: number;
  comment: string;
}

@Component({
  selector: 'app-single-post',
  imports: [],
  templateUrl: './single-post.html',
  styleUrl: './single-post.scss',
})
export class SinglePost {
  readonly post = input.required<Post>();
  readonly postIndex = input.required<number>();
  readonly likeToggled = output<number>();
  readonly commentAdded = output<CommentAddedEvent>();
  readonly comment = signal('');

  onCommentInput(event: Event): void {
    this.comment.set((event.target as HTMLInputElement).value);
  }

  addComment(event: SubmitEvent): void {
    event.preventDefault();

    const comment = this.comment().trim();
    if (!comment) {
      return;
    }

    this.commentAdded.emit({
      postIndex: this.postIndex(),
      comment,
    });
    this.comment.set('');
    (event.target as HTMLFormElement).reset();
  }
}
