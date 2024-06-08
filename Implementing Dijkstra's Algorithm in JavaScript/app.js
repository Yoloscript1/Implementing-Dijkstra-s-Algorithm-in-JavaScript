function dijkstra(graph, start) {
    const distances = {};
    const queue = [];
  
    // Initialize distances and queue
    for (const vertex in graph) {
      distances[vertex] = Infinity;
      queue.push(vertex);
    }
  
    distances[start] = 0;
  
    while (queue.length > 0) {
      const u = queue.shift();
  
      for (const neighbor in graph[u]) {
        const alt = distances[u] + graph[u][neighbor];
  
        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
        }
      }
    }
  
    return distances;
  }

  const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
  };
  
  console.log(dijkstra(graph, 'A'));
  // Output:
  // {
  //   'A': 0,
  //   'B': 4,
  //   'C': 2,
  //   'D': 5
  // }