function percentage_1() {
  
    // O método retorna o elemento de id de porcentagem
    var percent = document.getElementById("percent").value;
      
    // O método retorna o elemento de num id
    var num = document.getElementById("num").value;
    document.getElementById("value1")
        .value = (num / 100) * percent;
}
  
function percentage_2() {
  
    // O método retorna o elemento de num1 id
    var num1 = document.getElementById("num1").value;
      
    // O método retorna os elementos de num2 id
    var num2 = document.getElementById("num2").value;
    document.getElementById("value2")
        .value = (num1 * 100) / num2 + "%";
}