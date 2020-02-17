import {range, of, timer} from 'rxjs';
import {delay, delayWhen, tap} from 'rxjs/operators';

const source1$ = of(42);
const source2$ = range(1, 19);

const sub1$ = source1$.pipe(
  tap(_=>console.log('What is the meaning of life, the universe, and everything?')),
  delay(2000),
  delay(2000),

  )
  .subscribe(console.log);

console.log('STARTING');
const sub2$ = source2$
  .pipe(
    delayWhen(n => timer(n * 1000))
  )
  .subscribe(console.log)