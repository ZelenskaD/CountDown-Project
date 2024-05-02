function randomGame(){
  let num;
  let isPicked = 0;
    const id = setInterval( () => {
     num = Math.random();
      isPicked++;
      console.log("Try #: " + isPicked + "., Num is: " + num);
      if (num > 0.75){
        clearInterval(id);
        console.log("It took " + isPicked + " try/tries");
      }
    }, 1000)
}
randomGame();

