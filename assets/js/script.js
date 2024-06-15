// function pintar_negro(){
//     elemento = document.querySelector('body')
//     elemento.style.backgroundColor = "black"
// }

// function pintar_rojo(){
//     elemento = document.querySelector('body')
//     elemento.style.backgroundColor = "red"
// }

pintar = function(color= "green"){
    elemento = document.querySelector('body')
    elemento.style.backgroundColor = color
}


// pintar("red")

agregar_borde = function(elementId, color){
    elemento = document.querySelector('#' + elementId)
    elemento.style.border = "dashed 3px " + color
}

funcionMultiplesParametros = function (par1, par2=2,par3=2) {

    console.log(par2 + par3)
}
    
funcionMultiplesParametros(3)

getBkgColor = function(elementId){
    element = document.querySelector('#'+ elementId)
    return element.style.backgroundColor
}

getValue = function(elementId){
    entrada = document.querySelector("#" + elementId)
    

}


