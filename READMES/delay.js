const delay = function () {
  console.log('delay by 1 second before running gulp');
  setTimeout(function delay1Second() {
    console.log('delay completed.');
  }, 1000);
}

delay();
