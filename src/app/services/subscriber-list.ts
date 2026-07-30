import { Injectable, signal } from '@angular/core';

export interface Subscriber {
  name: string;
  isFollowing: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SubscriberListService {
  private readonly subscriberState = signal<Subscriber[]>([
    { name: 'Anna Müller', isFollowing: true },
    { name: 'Bernd Schmidt', isFollowing: false },
    { name: 'Clara Fischer', isFollowing: true },
    { name: 'David Weber', isFollowing: false },
    { name: 'Eva Becker', isFollowing: true },
  ]);

  readonly subscribers = this.subscriberState.asReadonly();
}
