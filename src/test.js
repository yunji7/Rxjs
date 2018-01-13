 


var clickStop = function () {

  var clicks = Rx.Observable.fromEvent(document.querySelector('button'), 'click');


  const start = 5;
  var watch = Rx.Observable
    .timer(0, 1000)
    // .take(start + 1)
    // .map(i => start - i)
    .map(seconds => {
      if (seconds < 1) {
        return 'value'
      } else {
        return 'async Plus' + seconds
      }
    })
    .takeUntil(clicks)


  watch.subscribe(e => console.log(e));

}


// clickStop();


const ss = function(){
  var clicks = Rx.Observable.fromEvent(document, 'click');
  // 每次点击事件都会映射成间隔1秒的 interval Observable
  var switched = clicks.map((ev) => Rx.Observable.interval(1000));
  // var switched = higherOrder.switch();
  // 结果是 `switched` 本质上是一个每次点击时会重新启动的计时器。
  // 之前点击产生的 interval Observables 不会与当前的合并。
  
  switched.subscribe(x => console.log(x))
}
// ss();


const clickInterval = function(){
  var clicks = Rx.Observable.fromEvent(document, 'click')
      .switchMapTo(Rx.Observable.interval(1000))
          
              //  .switch()


  clicks.subscribe(x=>console.log(x));


}

clickInterval();


// const switchMap = function(){
//   var clicks = Rx.Observable.fromEvent(document, 'click');
//   var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
//   result.subscribe(x => console.log(x));
// }

// switchMap();