function countDown(num) {
  const id = setInterval(() => {
    if (num > 1) {
      console.log(num - 1);
      num--;
    } else {
      console.log("DONE!");
      clearInterval(id);
    }
  }, 1000);
}
countDown(4); 
