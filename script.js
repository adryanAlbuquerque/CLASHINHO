function atualizarCampos() {
    const consulta = document.getElementById("consulta").value;
    const camposDiv = document.getElementById("campos-dinamicos");
    camposDiv.innerHTML = '';
  
    if (consulta === '1') {
      camposDiv.innerHTML = `
        <label for="carta">Carta:</label>
        <input type="text" id="carta" placeholder="Ex: Bruxa" />
        <label for="inicio">Data de Início:</label>
        <input type="date" id="inicio" />
        <label for="fim">Data de Fim:</label>
        <input type="date" id="fim" />
      `;
    } else if (consulta === '2') {
      camposDiv.innerHTML = `
        <label for="percentual">Porcentagem de Vitórias (%):</label>
        <input type="number" id="percentual" placeholder="Ex: 80" />
        <label for="inicio-deck">Data de Início:</label>
        <input type="date" id="inicio-deck" />
        <label for="fim-deck">Data de Fim:</label>
        <input type="date" id="fim-deck" />
      `;
    } else if (consulta === '3') {
      camposDiv.innerHTML = `
        <label for="combo">Combo de Cartas (separadas por vírgula):</label>
        <input type="text" id="combo" placeholder="Ex: Bruxa,Mineiro" />
      `;
    } else if (consulta === '4') {
      camposDiv.innerHTML = `
        <label for="carta-cond">Carta:</label>
        <input type="text" id="carta-cond" placeholder="Ex: Cavaleiro" />
        <label for="condicao">Condição (Ex: Arena 10+):</label>
        <input type="text" id="condicao" />
      `;
    } else if (consulta === '5') {
      camposDiv.innerHTML = `
        <label for="n">Número de Cartas no Combo:</label>
        <input type="number" id="n" placeholder="Ex: 3" />
        <label for="y">Porcentagem de Vitórias (%):</label>
        <input type="number" id="y" placeholder="Ex: 70" />
      `;
    }
  }
  
  function consultar() {
    const consulta = document.getElementById("consulta").value;
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = '';
  
    if (consulta === '1') {
      const carta = document.getElementById("carta").value;
      resultadoDiv.innerHTML = `Vitórias com ${carta}: 60%\nDerrotas com ${carta}: 40%`;
    } else if (consulta === '2') {
      const container = criarDeckAleatorio(["cavaleiro", "bruxa", "mineiro", "bandida"]);
      resultadoDiv.innerHTML = `<strong>Decks com mais de 80% de vitória:</strong>`;
      resultadoDiv.appendChild(container);
    } else if (consulta === '3') {
      const combo = document.getElementById("combo").value;
      const cartas = combo.split(',').map(c => c.trim().toLowerCase());
      const container = criarDeckAleatorio(cartas);
      resultadoDiv.innerHTML = `Combo mais derrotado: ${combo} → Derrota em 70% das partidas.`;
      resultadoDiv.appendChild(container);
    } else if (consulta === '4') {
      const carta = document.getElementById("carta-cond").value;
      const condicao = document.getElementById("condicao").value;
      resultadoDiv.innerHTML = `${carta} teve 75% de vitórias em condição: ${condicao}.`;
  
      const container = criarDeckAleatorio(["valquíria"]);
      resultadoDiv.appendChild(container);
    } else if (consulta === '5') {
      const n = parseInt(document.getElementById("n").value);
      const y = document.getElementById("y").value;
      const todasCartas = ["bruxa", "arqueiras", "valquíria", "gigante", "mago", "golem", "corredor", "bebê-dragão"];
      const cartas = embaralhar(todasCartas).slice(0, n);
      const container = criarDeckAleatorio(cartas);
  
      resultadoDiv.innerHTML = `Combos com ${n} cartas e ${y}% de vitória:`;
      resultadoDiv.appendChild(container);
    }
  }
  
  function criarDeckAleatorio(cartas) {
    const container = document.createElement("div");
    container.className = "deck-container";
    cartas.forEach(carta => {
      const img = document.createElement("img");
      img.src = `images/${carta}.png`;
      img.alt = carta;
      container.appendChild(img);
    });
    return container;
  }
  
  function embaralhar(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  window.onload = atualizarCampos;
  