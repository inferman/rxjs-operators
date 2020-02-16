import {timer} from 'rxjs';
import {startWith, map, tap} from 'rxjs/operators';


console.log('Made API request')
const timer$ = timer(4000, 500);
const fakeApi$ = timer$
    .pipe(
        map(n => n+1),
        startWith(0),
        tap(v => console.log('request complete:', v))
    );

fakeApi$.subscribe();
    