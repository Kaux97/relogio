const horas =
document.querySelector('#horas')
const minutos = 
document.querySelector('#minutos')
const segundos = 
document.querySelector('#segundos')
const data = 
document.querySelector('#data')
const mes =
document.querySelector('#mes')
const ano = 
document.querySelector('#ano')


setInterval (relogio,1000)

//função

function relogio(){
    let dia = new Date()
    let h = dia.getHours()
    let m = dia.getMinutes()
    let s = dia.getSeconds()
    let dd = dia.getDate()
    let mm = dia.getMonth()+1
    let aa = dia.getFullYear()

    if(h<10){
        h ="0" +h
    }
    if(m<10){
        m = "0" +m
    }
    if(s<10){
        s = "0" +s
        
    }

    
    if(dd<10){
        dd = "0" +dd
    }

    if(mm<10){
        mm = "0" +mm
    }


    if(h>4 && h<12){
        texto.textContent = "Bom dia!!"
    }else if(h>=12 && h<18){
        texto.textContent = "Boa tarde!!"
    }else{
        texto.textContent = "Boa Noite!!"
    }
    
    


    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s
    data.textContent = dd
    mes.textContent = mm
    ano.textContent = aa

    
}
