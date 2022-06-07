class Graph{
    constructor(){
        this.adjacentList = {};
    }

    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex] = [];
        }
    }

    addEdge(vertex1,vertex2){
        this.adjacentList[vertex1].push(vertex2);
        this.adjacentList[vertex2].push(vertex1);
    }

    removeEdge(vertex1,vertex2){
        this.adjacentList[vertex1] = this.adjacentList[vertex1].filter(v => v !== vertex2);
        this.adjacentList[vertex2] = this.adjacentList[vertex2].filter(v => v !== vertex1);
    }

    removeVertex(vertex){
        while(this.adjacentList[vertex].length){
            const vertex2 = this.adjacentList[vertex].pop();
            this.removeEdge(vertex,vertex2)
        }
        delete this.adjacentList[vertex];
    }
    
    print(){
        console.log(this.adjacentList)
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("LosAngeles");
g.addVertex("HongKong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("HongKong", "Tokyo");
g.addEdge("HongKong", "Dallas");
g.addEdge("LosAngeles", "HongKong");
g.addEdge("LosAngeles", "Aspen");

g.print();

g.removeEdge("Dallas","HongKong");

g.print();

g.removeVertex("HongKong");

g.print();