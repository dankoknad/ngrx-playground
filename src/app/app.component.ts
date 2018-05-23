import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INCREMENT, DECREMENT, RESET } from '../counter';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <div class="counter">
      <div class="count">Current Count: {{ count$ | async }}</div>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
      <button class="btn-reset" (click)="reset()">Reset Counter</button>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }
}
