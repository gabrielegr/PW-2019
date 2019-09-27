function area(){
    radio=parseInt(prompt("Ingrese el radio de la circunferencia:"));
    let area=-1;
    if (radio>0)
    area=Math.PI*Math.pow(radio,2);
    return area;
}