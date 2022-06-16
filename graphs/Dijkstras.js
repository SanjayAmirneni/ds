class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val,priority){
        this.values.push({val,priority});
        this.sort();
    }

    dequeue(){
        return this.values.shift();
    }

    sort(){
        this.values.sort((a,b)=> a.priority - b.priority);
    };
}

class WeightedGraph {
    constructor(){
        this.adjacentList = {};
    }

    addVertex(vertex){
        if(!this.adjacentList[vertex]) this.adjacentList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacentList[vertex1].push({node:vertex2, weight});
        this.adjacentList[vertex2].push({node:vertex1, weight})
    }

    Dijkstra(start,finish){
        const nodes = new PriorityQueue();
        const distance = {};
        const previous = {};
        let path = [];
        let smallest;
        // console.log(this.adjacentList);

        for(let vertex in this.adjacentList){
            // console.log(vertex,start)
            if(vertex === start){
                distance[vertex] = 0;
                nodes.enqueue(vertex,0);
            } else {
                distance[vertex] = Infinity;
                nodes.enqueue(vertex,Infinity);
            }
            previous[vertex] = null;
        }

        // console.log(nodes.values)
        // nodes.enqueue('B',2)
        // console.log(nodes.values)
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                while(previous[smallest]){
                    // console.log(smallest)
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distance[smallest] !== Infinity){
                for(let neighbor in this.adjacentList[smallest]){
                    let nextNode = this.adjacentList[smallest][neighbor];
                    let candidate = distance[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distance[nextNeighbor]){
                        distance[nextNeighbor] = candidate;
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor,candidate)
                    }
                    // console.log(nodes.values)
                }
            }
        }
        // console.log(nodes.values)
        // console.log(path);
        return path.concat(smallest).reverse();
    }
}


var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


console.log(graph.Dijkstra("A","E"));