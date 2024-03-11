// Estou usando a lógica do Caixeiro Viajante para resolver o problema
// Função para calcular a distância entre dois pontos usando a fórmula de Haversine
function calcularDistanciaHaversine(coord1, coord2) {
  const [lat1, lon1] = coord1;
  const [lat2, lon2] = coord2;

  const R = 6371; // Raio da Terra em km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Heurística de Vizinho Mais Próximo para calcular uma rota aproximada
function calcularRotaVizinhoMaisProximo(clientes) {
  let rota = [clientes[0]]; // Começa com o primeiro cliente
  let clientesParaVisitar = clientes.slice(1);

  while (clientesParaVisitar.length > 0) {
    let ultimoVisitado = rota[rota.length - 1];
    let proximoIndex = 0;
    let distanciaMinima = Infinity;

    for (let i = 0; i < clientesParaVisitar.length; i++) {
      let distancia = calcularDistanciaHaversine(
        [ultimoVisitado.coordenada_x, ultimoVisitado.coordenada_y],
        [clientesParaVisitar[i].coordenada_x, clientesParaVisitar[i].coordenada_y]
      );

      if (distancia < distanciaMinima) {
        distanciaMinima = distancia;
        proximoIndex = i;
      }
    }

    rota.push(clientesParaVisitar[proximoIndex]);
    clientesParaVisitar.splice(proximoIndex, 1); // Remove o cliente adicionado à rota
  }

  return rota;
}

module.exports = calcularRota;
