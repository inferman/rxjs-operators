import { empty } from 'rxjs';
import {tap, defaultIfEmpty} from 'rxjs/operators';

const source$ = empty();
source$
  .pipe(
    defaultIfEmpty('empty observable')
  )
  .subscribe(console.log)