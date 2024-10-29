function debounce(func, timeout){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
function opDebounce(fn, delay, options) {
    var timer = null,
        first = true,
        leading;
    if (typeof options === 'object') {
        leading = !!options.leading;
    }
    return function () {
        let context = this,
            args = arguments;
        if (first && leading) {
            fn.apply(context, args);
            first = false;
        }
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}
  


// function sayHello() {
//     console.log("Hello!");
//   }
  
//   const debouncedSayHello = debounce(sayHello, 1000);
  
//   debouncedSayHello(); 
//   setTimeout(debouncedSayHello, 500); 
//   setTimeout(debouncedSayHello, 1100); 
  

