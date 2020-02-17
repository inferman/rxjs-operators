import {timer, interval} from 'rxjs';
import {take, takeWhile, takeUntil} from 'rxjs/operators';

// take - Number
// takeUntil - Callback
// takeWhile - Observable

const source$ = interval(100);
const sub$ = source$
  .pipe(
    // take(8),
    // takeWhile(n => n < 9),
    takeUntil(timer(2000))
  )
  .subscribe(console.log)

