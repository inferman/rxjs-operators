import { range, merge } from 'rxjs';
import { filter, tap, map, mapTo } from 'rxjs/operators';

const rangeOb$ = range(1,23);
const even$ = rangeOb$.pipe(
  filter(val => val%2 === 0)
)
const odd$ = rangeOb$.pipe(
  filter(val => val%2 !== 0),
  map(val => `odd val is ${val}`),
  mapTo({key: 'anything'})
)
const subOdd$ = odd$
const subEven$ = even$
const union$ = merge(subEven$,subOdd$)
// subOdd$.subscribe(console.log)
// subEven$.subscribe(console.log)
union$.subscribe(console.log)

