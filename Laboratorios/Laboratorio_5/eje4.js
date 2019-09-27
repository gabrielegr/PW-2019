function random(){
    let arr=[];
    let adivinaste=false;
    for(let i=0;i<20;i++){
        arr.push(Math.floor(Math.random() * 101));
    }
  let adivina=parseInt(prompt("Adivina uno de los numero entre 1 y 100:"));
arr.forEach(element => {
    if (element == adivina)
    adivinaste=true;
  });
  if(adivinaste){
      console.log("Advinaste!")
  }
  else{
      console.log("Mejor suerte en la proxima")
  }
}