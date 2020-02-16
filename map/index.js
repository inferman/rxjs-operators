import { range, interval } from 'rxjs';
import {map, mapTo, tap} from 'rxjs/operators';

const rangeObs$ = range(1, 10)
const multiplier$ = rangeObs$.pipe(
  map(n => n*5),
  tap(console.log)
) 
const sub$ = multiplier$
// sub$.subscribe()

const intervalObs$ = interval(1000)
const notificationAPI$ = intervalObs$.pipe(
  mapTo({type: 'NOTIFICATION', data: 'some usefull data'}),
  tap(console.log)
)
const notificationSub$ = notificationAPI$;
notificationSub$.subscribe();