class Node{
    constructor(val){
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
    
        var node = new Node(val)
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
            this.tail.next = null;
        }

        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return null;
        // console.log(this.tail)
        var node = this.tail;
        this.tail = this.tail.prev;
        // console.log(this.tail)
        this.tail.next = null;
        node.prev = null;
        node.next = null;
        this.length--;
        // console.log(this);

        if(this.length==0){
            this.head = null;
            this.tail = null;
        }
        return node;
    }

    shift(){
        if(!this.head) return null;
        // console.log(this);
        var node = this.head;
        // console.log(node)
        this.head = node.next;
        // console.log(this.head)
        this.head.prev = null;
        node.next = null;
        node.prev = null;
        this.length--;
        if(this.length==0){
            this.head = null;
            this.tail = null;
        }
        // console.log(this);
        return node;
    }

    unshift(val){
        var node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }
        else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(index){
        // console.log(index);
        // console.log(this.length);
        if(index < 0 || index >= this.length) return null;
        var node;
        var currentnode;
        var count;
        if(index <= this.length/2){
            count = 0;
            currentnode = this.head;
            while(index != count){
                currentnode = currentnode.next;
                count++;
            }
        }
        else{
            count = this.length-1;
            currentnode = this.tail;
            while(index != count){
                currentnode = currentnode.prev;
                count--;
            }
        }
        return currentnode;
    }

    set(val,index){
        if(index < 0 || index >= this.length) return null;
        var node = this.get(index-1);
        node.value = val;
        // console.log(this);
        return node;
    }

    inset(val,index){
        var node = new Node(val);
        console.log(index, this.length);
        if(index < 0 || index>= this.length ) return null;
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val);
        var prevnode = this.get(index-1);
        node.next = prevnode.next;
        node.prev = prevnode;
        prevnode.next = node;
        prevnode.next.prev = node;
        prevnode = node;
        this.length++;
        return this;
    }

    print(){
        var node = this.head;
        var arr = [];
        while(node){
            arr.push(node.value);
            node = node.next;
        }
        return arr;
    }

    remove(index){
        if(index < 0 || index >= this.length) return null;
        if(index === 0) return this.unshift();
        if(index === this.length) return this.pop();
        var prevnode = this.get(index-1);
        var removenode = prevnode.next;
        prevnode.next = removenode.next;
        removenode.next.prev = prevnode;
        return this;
    }
}



var list = new DoubleLinkedList();
list.push(50);
list.push(60);
list.push(70);
list.push(90);
list.push(100);
list.pop();
list.shift();
list.unshift(80);
list.get(1);
list.get(2);
list.set(30,3);
console.log(list.inset(40,3))
console.log(list.remove(2));
console.log(list.print());

