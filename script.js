function converterBase() {
    let num = document.getElementById("numero").value;
    let opcao = parseInt(document.getElementById("opcao").value);
    let resultado = document.getElementById("resultado");
  
    if (opcao === 1) {
      // Decompor o decimal
      let partes = num.split(".");
      let parteInteira = parseInt(partes[0], 10);
      let parteDecimal = partes[1] ? parseFloat(`0.${partes[1]}`) : 0;
  
      // Conversão de decimal para binário
      let binarioInteiro = parteInteira.toString(2);
      let binarioDecimal = converterDecimalFracionarioParaBinario(parteDecimal);
  
      resultado.textContent = `${num} convertido para binário é ${binarioInteiro}.${binarioDecimal}`;
    } else if (opcao === 2) {
      // Conversão de decimal para octal
      let octalInteiro = parseInt(num, 10).toString(8);
      resultado.textContent = `${num} convertido para octal é ${octalInteiro}`;
    } else if (opcao === 3) {
      // Conversão de decimal para hexadecimal
      let partes = num.split(".");
      let parteInteira = parseInt(partes[0], 10).toString(16).toUpperCase();
      let parteDecimal = partes[1] ? converterDecimalFracionarioParaHexadecimal(parseFloat(`0.${partes[1]}`)) : "";
  
      resultado.textContent = `${num} convertido para hexadecimal é ${parteInteira}${parteDecimal}`;
    } else if (opcao === 4) {
      // Convertendo de binário para decimal
      let decimal = parseInt(num, 2);
      resultado.textContent = `${num} convertido para decimal é ${decimal}`;
    } else if (opcao === 5) {
      // Conversão de hexadecimal para decimal
      let decimal = parseInt(num, 16);
      resultado.textContent = `${num} convertido para decimal é ${decimal}`;
    } else {
      resultado.textContent = "Opção inválida. Escolha apenas as opções de 1 a 5.";
    }
  }
  
  function converterDecimalFracionarioParaBinario(decimal) {
    let binario = "";
    let precisao = 8; // Define a precisão desejada para a parte decimal
  
    while (decimal > 0 && precisao > 0) {
      decimal *= 2;
      binario += Math.floor(decimal);
      decimal = decimal % 1;
      precisao--;
    }
  
    return binario;
  }
  
  function converterDecimalFracionarioParaHexadecimal(decimal) {
    let hexadecimal = "";
    let precisao = 8; // Define a precisão desejada para a parte decimal
  
    while (decimal > 0 && precisao > 0) {
      decimal *= 16;
      let valor = Math.floor(decimal);
      hexadecimal += valor.toString(16).toUpperCase();
      decimal = decimal % 1;
      precisao--;
    }
  
    return hexadecimal;
  }
  