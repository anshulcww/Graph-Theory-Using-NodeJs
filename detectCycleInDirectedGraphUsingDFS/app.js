var express = require('express');
var app = express();
var port = 3000;


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

    // Detect Cycle Main Function
    hasCycle() {
        let whiteSet = new Set();
        let greySet = new Set();
        let blackSet = new Set();
        //console.log(vertices);

        // Insert all vertices into white set
        vertices.forEach(element => {
            whiteSet.add(element);
        });
        //console.log(whiteSet);
        //console.log(whiteSet.size);
        for (let current of whiteSet) {
            if (this.dfs(current, whiteSet, greySet, blackSet)) {
                console.log("Cycle has Detected")
                return true;
            }
        }
        console.log("No cycle");
        return false
    }

    dfs(currentNode, whiteSet, greySet, blackSet){
        this.moveVertex(currentNode, whiteSet, greySet);
        var getNeighbours = this.adjList.get(currentNode);
        for(var childNode of getNeighbours){
            if(blackSet.has(childNode)){
                continue;
            }
            
            if(greySet.has(childNode)){
                return true;
            }
            if(this.dfs(childNode, whiteSet, greySet, blackSet)){
                return true;
            }
        }
        this.moveVertex(currentNode, greySet, blackSet);
        return false;
        
    }

    moveVertex(node, sourceSet, destSet){
        sourceSet.delete(node);
        destSet.add(node);
    }
}


var g = new Graph(6);

var vertices = [0, 1, 2, 3];

// adding vertices 
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

// g.addEdge(0, 1);
// g.addEdge(0, 2);
// g.addEdge(1, 2);
// g.addEdge(2, 0);
// g.addEdge(2, 3);
// g.addEdge(3, 3);

g.printGraph();
g.hasCycle();


app.listen(port, function () {
    console.log(`Server is listening on Port ` + port)
});