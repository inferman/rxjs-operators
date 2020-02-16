import {Observable} from 'rxjs';

const customOb$ = Observable.create(observer => {
    observer.next(42);
    setInterval(() => {observer.next('SOME STRING!!!!')},500);
    setTimeout(() => {
        observer.complete()
    },2500)
});

customOb$.subscribe({
    next: a => console.log('NEXT!', a),
    complete: _ => console.log('COMPLETE')
})