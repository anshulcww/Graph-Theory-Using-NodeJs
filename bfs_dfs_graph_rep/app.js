
var express =  require('express');
var app =  express();

class Graph{

    constructor(noOfVertices){
        this.noOfVertices = noOfVertices,
        this.adjList = new Map()
    }

    // Adding Vertices
    addVertex(v){
        this.adjList.set(v , [])
    }

    // Adding Edges to the Vertices
    addEdge(u, v){
        this.adjList.get(u).push(v);
        this.adjList.get(v).push(u);
    }

    // Printing Graph
    printGraph(){
        var getKeys = this.adjList.keys();
        for(var i of getKeys){
            var getValues = this.adjList.get(i);
            var conc = "";
            for (var j of getValues) 
            conc += j + " "; 
        // print the vertex and its adjacency list 
        console.log(i + " -> " + conc); 
        }

    }

    // BFS traversal

    bfs(startingNode){
        // initiate visited false
        var s = new Set();
        s.add(startingNode);
        
         var queue = [];
         queue.push(startingNode)

        while(queue.length > 0){
            var deqNode = queue.shift();
            console.log(deqNode);
            var getEdgesOfCurrentNode = this.adjList.get(deqNode);
            for(var i in getEdgesOfCurrentNode){
                let x = getEdgesOfCurrentNode[i]
                if(!s.has(x)){
                    queue.push(x);
                    s.add(x);
                }
            }
        }
    }

    //DFS Traversal on Graph By Recursion  Implement only for small graph

    dfsRecursive(startingNode){
        // Visited Check Set
        var visitedSet = new Set();
        this.dfsUtil(startingNode, visitedSet);
    }

    dfsUtil(vertex,visitedSet ){
        console.log(vertex)
        visitedSet.add(vertex);
        let get_neighbour = this.adjList.get(vertex);
        for(var i of get_neighbour){
            // var get_elem = get_neighbour[i];
            if(!visitedSet.has(i)){
                this.dfsUtil(i, visitedSet)
            }
        }

    }

    dfsUsingStack(startingNode){
        var visitedSet = new Set();
        visitedSet.add(startingNode);
        let stack = [];
        stack.push(startingNode);
        
        while(stack.length > 0){
            let t = stack.pop();
            console.log(t);
            let get_neighbour = this.adjList.get(t);
            for(var i of get_neighbour){
                if(!visitedSet.has(i)){
                    stack.push(i);
                    visitedSet.add(i);
                }
            }
        }
    }

    //Topological Sorting





}
var g = new Graph(6); 
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]; 
  
// adding vertices 
for (var i = 0; i < vertices.length; i++) { 
    g.addVertex(vertices[i]); 
} 
  
//adding edges 
g.addEdge('A', 'B'); 
g.addEdge('A', 'D'); 
g.addEdge('A', 'E'); 
g.addEdge('B', 'C'); 
g.addEdge('D', 'E'); 
g.addEdge('E', 'F'); 
g.addEdge('E', 'C'); 
g.addEdge('C', 'F'); 




  
// prints all vertex and 
// its adjacency list 
// A -> B D E 
// B -> A C 
// C -> B E F 
// D -> A E 
// E -> A D F C 
// F -> E C 
g.printGraph(); 

 
console.log("BFS"); 
g.bfs('A');
 console.log("DFS Using recursion");
g.dfsRecursive('A');

console.log("DFS using Iterators");
g.dfsUsingStack('A');

console.log("Topological Sorting");
g.topSort();






app.listen(3000);
