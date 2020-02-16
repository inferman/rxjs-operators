import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const range$ = range(1, 9);
range$.pipe(
  tap(console.log),
  map(n => n*2),
  tap(console.log)
).subscribe()

