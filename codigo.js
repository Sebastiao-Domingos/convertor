window.onload = function(){
    


    selecionar( 0 , 0)
}

var retorno_radio = []



let calcular = function(){
    let entrada = arguments[0].value
    let saida = document.querySelector('.saida-resultado')
    var resul , base
    try{
        if( retorno_radio[0] === "B"  && retorno_radio[1] === "B") {
            resul = entrada 
            base = 2
        } else  if( retorno_radio[0] === "B"  && retorno_radio[1] === "D") {
            var enter = Number(entrada)
            resul = parseInt( enter , 2)
            base  = 10
        } else  if(  retorno_radio[0] === "B"  && retorno_radio[1] === "O" ) {
            resul =  binario_octal_hexa(2, entrada ,8 )
            base = 8
        } else if( retorno_radio[0] === "B"  && retorno_radio[1] === "H" ){
            resul =  binario_octal_hexa( 2, entrada ,16 )
            base = 16
        } else if(  retorno_radio[0] === "O" && retorno_radio[1] === "B") {
            resul =  binario_octal_hexa( 8, entrada ,2 )
            base =2
        } else if(  retorno_radio[0] === "O" && retorno_radio[1] === "O") {
            resul =  binario_octal_hexa( 8, entrada ,8 )
            base =8
        } else if(  retorno_radio[0] === "O" && retorno_radio[1] === "D") {
            resul =  binario_octal_hexa( 8, entrada ,10 )
            base =10
        } else if(  retorno_radio[0] === "O" && retorno_radio[1] === "H") {
            resul =  binario_octal_hexa( 8, entrada ,16 )
            base = 16
        }
  
        saida.innerHTML =`O resultado : ${resul} <sub>${base}</sub>` 
    } catch(erro) {
        alert("Erro de calculo")
    }
    

}


function binario_octal_hexa( base1 ,valor, base){
    var bin = parseInt(Number(valor) , base1)
   
    var cont = [] 
    while( bin >= base){
        cont.push( bin % base )
        bin = Math.floor( bin / base )
    }

    cont.push(bin)
    cont.reverse()
    var convers = ""

    for( valor of cont){
        convers += valor
    }

    return convers
}

function octal_binario_de_hex(octal , base){
    var decimal  = parseInt(Number(octal) , 8)
    
    return 5*5
}


function selecionar( type , obj ){
    var labels1 = document.getElementsByClassName('label1')
    var labels2 = document.getElementsByClassName('label2')

    if( type === 0){
        labels1[0].style.background = "green"
        labels2[0].style.background = "green"
        retorno_radio[0] = labels1[0].innerHTML.charAt(0)
        retorno_radio[1] = labels2[0].innerHTML.charAt(0)
    } else if( type === 1 ){
        obj.style.background = "green"
        for( var index in labels1 ){
            if( labels1[index] !== obj) 
                labels1[index].style.background = "transparent"
            else
                retorno_radio[0] = obj.innerHTML.charAt(0)
        }
    }else {
        
        obj.style.background = "green"
        for( index in labels2 ){
            if( labels2[ index ] !== obj ) 
                labels2[ index ].style.background = "transparent"
            else
                retorno_radio[1] = obj.innerHTML.charAt(0)
        }
    }

}



