if (compra >= 200) {
    desconto = 20
    desconto = 20/100
    compra = compra * desconto
    console.log("desconto de 20%")
} else if(compra >= 100){
    desconto = 10
    desconto = 10/100
    compra = compra *desconto
    console.log("Desconto de 10%")
}else{
    console.log("Sem desconto")
}