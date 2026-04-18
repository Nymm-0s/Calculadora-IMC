import React, { useState } from "react";
import "./IMC.css";

function IMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = () => {
    if (peso > 0 && altura > 0) {
      const imcValor =
        (parseFloat(peso) / Math.pow(parseFloat(altura) / 100, 2)).toFixed(2);

      setIMC(imcValor);
      setClassificacao(obterClassificacao(imcValor));
    }
  };

  const obterClassificacao = (imcValor) => {
    if (imcValor < 18.5) return "Abaixo do Peso";
    else if (imcValor < 24.9) return "Peso Normal";
    else if (imcValor < 29.9) return "Sobrepeso";
    else if (imcValor < 34.9) return "Obesidade Grau I";
    else if (imcValor < 39.9) return "Obesidade Grau II";
    else return "Obesidade Grau III";
  };

  return (
    <div className="IMC">
      <h2>Calculadora de IMC</h2>

      <label>Peso (kg)</label>
      <input
        type="number"
        placeholder="Ex: 70"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />

      <label>Altura (cm)</label>
      <input
        type="number"
        placeholder="Ex: 170"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />

      <button onClick={calcularIMC}>Calcular</button>

      {imc && (
        <div>
          <p>IMC: {imc}</p>
          <p>{classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default IMC;