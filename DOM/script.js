// const paragrafo = document.getElementById("paragrafo")
// const paragrafo2 = document.getElementById("paragrafo2")
// const paragrafo3 = document.getElementById("paragrafo3")
// const paragrafo4 = document.getElementById("paragrafo4")

// console.log(paragrafo)
// console.log(paragrafo2)
// console.log(paragrafo3)
// console.log(paragrafo4)

// const title = document.getElementById("title")

// title.innerText = "Palmeiras Campeão"

// const paragrafo = document.getElementById("paragrafo")
// paragrafo.style.color = "#ff982"
// paragrafo.style.fontSize = "90px"
// paragrafo.style.backgroundColor = "aqua"

// const paragrafo2 = document.getElementById("paragrafo2")
// paragrafo2.style.color = "#ff982"
// paragrafo2.style.fontSize = "90px"
// paragrafo2.style.backgroundColor = "green"


// const paragrafo = document.getElementById("paragrafo")
// const btn = document.getElementById("btn")

// btn.addEventListener("click", function(){
//     paragrafo.innerText = "Deu bom!!!"
//     paragrafo.style.color = "blue"
// })

// const paragrafo = document.getElementById("paragrafo")
// const btn = document.getElementById("btn")
// const img = document.getElementById("img")

// btn.addEventListener("mouseout", function(){
//     paragrafo.innerText = "Texto alterado com sucesso!"
//     img.src = "https://s2-ge.glbimg.com/OElKASzx-9AoEE_OruAy4ixeS9Y=/0x0:1500x844/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/8/4/dxnBgpQBCOLKiJO5KY0w/54378104247-f15666df2d-h.jpg"
// })

document.addEventListener("keydown", function(e){

    if (e.key == "r") {
        document.body.style.backgroundColor = "red"
    } else if(e.key == "g"){
        document.body.style.backgroundColor = "green"
    }else if(e.key == "b"){
        document.body.style.backgroundColor = "blue"
    }else{
        alert("tecla errada")
    }
})