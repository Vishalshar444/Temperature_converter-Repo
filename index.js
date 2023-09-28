 const myfunc = (value)=>{
     if(value.toString().length>2){
         document.getElementsByClassName('temp-display')[1].classList.add('smallsize');
     }

 }

document.getElementById('Fheit').addEventListener("click",(e)=>{
    var Val = document.getElementsByTagName('input')[0].value;
    let fval = Math.ceil((Val*(9/5))+ 32) ;
   
    if(fval.toString().length>2){
        document.getElementsByClassName('temp-display')[1].classList.add('smallsize');
        document.getElementsByTagName('input')[0].value = fval; 
        document.getElementById('symbol').innerHTML = "&#8457;"
        document.getElementById('kel').setAttribute("disabled"," ");
    }else{
    document.getElementsByClassName('temp-display')[1].classList.remove('smallsize');
    document.getElementsByTagName('input')[0].value = fval; 
    document.getElementById('symbol').innerHTML = "&#8457;"
    document.getElementById('kel').setAttribute("disabled"," ");
    }
})

document.getElementById('kel').addEventListener("click",(e)=>{
    let Val = document.getElementsByTagName('input')[0].value;
    let kval = Val + parseInt(273.15) ;
    console.log(kval)
    document.getElementsByTagName('input')[0].value = kval;
    document.getElementById('symbol').innerHTML = "	&#x212A;"
    document.getElementsByClassName('temp-display')[1].classList.add('smallsize');
    document.getElementById('Fheit').setAttribute("disabled","");
})