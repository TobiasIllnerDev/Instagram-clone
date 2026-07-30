import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SubscriberListService } from '../../../services/subscriber-list';

@Component({
  selector: 'app-subscribers',
  imports: [],
  templateUrl: './subscribers.html',
  styleUrl: './subscribers.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Subscribers {
  private readonly subscriberListService = inject(SubscriberListService);

  protected readonly subscribers = this.subscriberListService.subscribers;
}
