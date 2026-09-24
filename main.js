/* Lucas Lima Da Cruz RA: 26110686*/
const formulario = document.getElementById("calc-form")/* pegando o formulário*/
 formulario.addEventListener("submit",function(event){
    event.preventDefault();
    const a = Number(document.getElementById("num1").value)
    const b = Number(document.getElementById("num2").value)
    
        const soma = a+b 
     
    document.getElementById("result-display").textContent = soma
 })
    

 
