
var express = require('express');
var app = express();
var port = 3000


class Graph {

    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices,
            this.adjList = new Map()
    }

    // Adding Vertices
    addVertex(v) {
        this.adjList.set(v, [])
    }

    // Adding Edges to the Vertices
    addEdge(u, v) {
        this.adjList.get(u).push(v);
        // this.adjList.get(v).push(u);
    }

    // Printing Graph
    printGraph() {
        var getKeys = this.adjList.keys();
        for (var i of getKeys) {
            var getValues = this.adjList.get(i);
            var conc = "";
            for (var j of getValues)
                conc += j + " ";
            // print the vertex and its adjacency list 
            console.log(i + " -> " + conc);
        }
    }

    // topological Sort
    topSort(){
        var visitedSet = new Set();
        var stack = [];

        for(var i = 0; i < vertices.length; i++){
            let vertex = vertices[i];
            if(!visitedSet.has(vertices[i])){
                this.topSortUtil(vertex, visitedSet, stack)
            }
        }
        console.log(stack);
    }
    // Top Sort Util Function
    topSortUtil(currentNode, visitedSet, stack){
        var getNeighbours = this.adjList.get(currentNode);
        visitedSet.add(currentNode);
        for(var neigh of getNeighbours){
            if(!visitedSet.has(neigh)){
                this.topSortUtil(neigh, visitedSet, stack);
            }
        }
        stack.push(currentNode);
    }
}

var g = new Graph(6);

var vertices = [0, 1, 2, 3, 4, 5];

// adding vertices 
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

g.addEdge(5, 2);
g.addEdge(5, 0);
g.addEdge(4, 0);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 1);

g.printGraph();

g.topSort();
app.listen(port, function () {
    console.log(`Server is listening on Port ` + port)
});