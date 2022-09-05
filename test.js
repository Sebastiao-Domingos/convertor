

var bin = [ 1,0,0,0,1]
var cont = bin.length
var result =  function binario_octal1(binario){
    var resultado =  bin.reduce( function ( total , array ) {
        return total + (array*Math.pow( 8 , --cont))
    },0)
    console.log(resultado )

}

result()

var num = 3436

function converter(){
    var cont = []

    while( num > 8){
        cont.push(num % 8)
        num = Math.floor( num / 8)
    }

    cont.push(num)


    cont.reverse()
    var convers = ""

    for( valor of cont){
        convers += valor
    }

    return convers
}

console.log(converter())

