function hasCycle(graph) {
    if (graph.edges.length === 0) {
        return false;
    }

    let parent = [];
    for (let i = 0; i < graph.vertices; i++) {
        parent[i] = i;
    }

    function find(i) {
        while (i !== parent[i]) {
            i = parent[i];
        }
        return i;
    }

    function union(x, y) {
        let rootX = find(x);
        let rootY = find(y);
        if (rootX !== rootY) {
            parent[rootY] = rootX;
        }
    }

    for (let i = 0; i < graph.edges.length; i++) {
        let [x, y] = graph.edges[i];
        if (find(x) === find(y)) {
            return true;
        }
        union(x, y);
    }

    return false;
}
