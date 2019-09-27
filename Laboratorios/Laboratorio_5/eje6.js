function ordenarAscendente(array=[1,2,3,4,5]){
    let a,b;
    for(let j=0;j<array.length-1;j++){
        for(let i=0;i<array.lenth-1;i++){
            if(array[i]>array[i+1]){
                a=array[i];
                b=array[i+1];
                arrray[i]=b;
                array[i+1]=a;
            }
        }
    }
    return console.log(array);
}