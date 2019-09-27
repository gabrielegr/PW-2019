function fibonacci(termino){
    let arr=[];
    let num=0;
    let num1=1;
    let num2;
    if(termino==1){
        arr.push(num);
    }
    else{
        arr.push(num);
        arr.push(num1);
    for(let i=3;i<=termino;i++){
        num2=num+num1;
        num=num1;
        num1=num2;
        arr.push(num2)
    
    }}
    console.log("La serie de fibonnaci hasta su " + termino + " termino es " + arr)
}