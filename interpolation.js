
function interpolation({ step, start, end, callback, duration }) {
  const distance = (end - start)/step;
  const interval = duration / step;
  let i = 0;
  let current = start;

  const timer = setInterval(() => {
    if (i >= step) {
      clearInterval(timer);
      return;
    }
    callback([current, (i+1) * interval]);
    current += distance ;
    i++;
  }, interval);
}

