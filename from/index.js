import { from } from 'rxjs';

const fibArr = [1,1,2,3,5,8,13,21]
const fibPromise = new Promise(r=>r(fibArr))
const obs$ = from(fibPromise)
obs$.subscribe(console.log)