function start() {
  const nome = document.getElementById("nome");
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const textArea = document.getElementById("textarea");

  const imc = peso / altura ** 2;
  console.log(imc);
  


  if(nome.value ==='' || isNaN(altura) || isNaN(peso)  ){
    alert('Erro doido')
    location.reload();
  }

  if(imc < 18.5){
    textArea.innerHTML= 'OLÁ ' + nome.value + '\n' + " SEU IMC: " + imc.toFixed(1) + '\n' + 'Muito Magro Filho';
  }else if(imc >= 18.5 && imc < 25.5){
    textArea.innerHTML='OLÁ ' + nome.value + '\n' + " SEU IMC: " + imc.toFixed(1) + '\n' + 'Ta Safe Pai';
  }else if(imc >= 25.0 && imc < 30.0){
    textArea.innerHTML='OLÁ ' + nome.value + '\n' + " SEU IMC: " + imc.toFixed(1) + '\n' + 'Ta Engordando Doido';
  }else if(imc >= 30.0 && imc < 40.0){
    textArea.innerHTML='OLÁ ' + nome.value + '\n' + " SEU IMC: " + imc.toFixed(1) + '\n' + 'Ta Gordão Filho';
  }else{
    textArea.innerHTML='OLÁ ' + nome.value + '\n' + " SEU IMC: " + imc.toFixed(1) + '\n' + 'Vai Morrer doido';
  }



}

