class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        var node = new Node(val);
        if(!this.first){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;
        var node = this.first;
        this.first = this.first.next;
        node.next = null;
        if(this.first === this.last){
            this.last = null;
        }
        this.size--;
        return node;
    }

    print(){
        var arr = [];
        var node = this.first;
        while(node){
            arr.push(node.value);
            node = node.next;
        }
        return arr;
    }
}

var queue = new Queue();
console.log(queue.enqueue(10));
console.log(queue.enqueue(20));
console.log(queue.enqueue(30));
console.log(queue.print());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.print());