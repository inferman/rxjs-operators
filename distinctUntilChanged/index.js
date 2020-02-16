import {of} from 'rxjs';
import {distinctUntilChanged, tap} from 'rxjs/operators';

const source$ = of(1,2,1,1,3,4,5,6,6,2,7,8,9,9);
const lineSequence$ = source$.pipe(
  distinctUntilChanged(),
  tap(console.log)
)

lineSequence$.subscribe()