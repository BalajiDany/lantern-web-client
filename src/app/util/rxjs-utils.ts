import { Subscription } from 'rxjs';

export function safeUnsubscribe(sub: Subscription): void {
    if (sub) { sub.unsubscribe(); }
}
