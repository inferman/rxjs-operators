import { interval } from 'rxjs';
import { first } from 'rxjs/operators';

const interval$ = interval(1000);
interval$
    .pipe(
        first(n => n===5)
    )
    .subscribe(console.log)