class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        var node = new Node(val);
        // console.log(node);
        if(!this.first){
            this.first = node;
            this.last = node;
        }
        else{
            node.next = this.first;
            this.first = node;
        }
        // console.log(this)
        return ++this.size;
    }


    pop(){
        if(!this.first) return null;
        var node = this.first;
        this.first = this.first.next;
        // node.next = null;
        this.size--;
        if(this.first === this.last ){
            // this.first = null;
            this.last = null;
        }
        return node;
    }

    print(){
        var arr = [];
        var node =  this.first;
        while(node){
            // console.log(node)
            arr.push(node.value);
            node = node.next;
        }
        return arr;
    }
}


var stack = new Stack();

console.log(stack.push(10));
console.log(stack.push(20));
console.log(stack.push(30));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.print());