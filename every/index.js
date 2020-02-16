import {range} from 'rxjs';
import {every, tap, map} from 'rxjs/operators';

const obs$ = range(1,9);

const every$ = obs$.pipe(
    // map(v => v*2),
    tap(console.log),
    // every(n=>n%2 === 0),
    every(n=>n!==5),
    tap(console.log)
)

every$.subscribe()

// Operator every runs only when observable completed!!!
// This operator check every value emitted by observable with condition provided in callback. And in case false return it and stop working if nothing match the condition return true.