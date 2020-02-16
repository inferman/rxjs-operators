import { interval } from 'rxjs';
import { tap, map, pluck } from 'rxjs/operators';

const intervalOb$ = interval(1000)

const generatorInfo$ = intervalOb$.pipe(
  map(i => ({name: `Person #${i+1}`, mutualPerson: i*2+1})),
  tap(console.log)
)
const nameInfo$ = generatorInfo$.pipe(
  pluck('name')
)

const sub$ = nameInfo$;
sub$.subscribe(console.log)