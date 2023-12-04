const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const arbGraph = jsc.record({
    vertices: jsc.nat,
    edges: jsc.array(jsc.tuple([jsc.nat, jsc.nat]))
});

jsc.assert(jsc.forall(arbGraph, (graph) => {
    return typeof hasCycle(graph) === 'boolean';
}));

jsc.assert(jsc.forall(jsc.nat, (vertices) => {
    return !hasCycle({ vertices, edges: [] });
}));

jsc.assert(jsc.forall(jsc.nat, (vertices) => {
    if (vertices < 3) return true; 
    const edges = [[0, 1], [1, 2], [2, 0]]; 
    return hasCycle({ vertices, edges });
}));
