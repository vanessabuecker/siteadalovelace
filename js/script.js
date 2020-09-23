 document.getElementById("botao").addEventListener("click",   validaFormulario)

 function validaFormulario(){
   if(document.getElementById("nome").value != "" && document.getElementById("email").value != ""){
   alert("Prontinho! Você receberá as novidades por E-mail.")
   }else{
     alert("Por favor, preencha os campos de Nome e E-mail!")
   }

  }