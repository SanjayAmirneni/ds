class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class SingleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var node = new Node(val);
        console.log(node);
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        }else{
            this.tail.next = node;
            console.log(this.tail);
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        var node = this.tail;
        var current = this.head;
        var prev ;
        while(current.next){
            prev = current;
            current = current.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--
        if(this.length===0){
            this.head=null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) return undefined;
        var node = this.head;
        this.head = node.next;
        this.length--
        if(this.length===0){
            this.head = null;
            this.tail = null;
        }
        return node;
    }

    unshift(val){
        var node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }

    get(index){
        if(index <0 || index >= this.length) return null;
        var counter = 0;
        var node = this.head;
        while(counter !== index){
            node = node.next;
            counter++;
        }
        return node;
    }

    set(val,index){
        if(index <0 || index >= this.length) return null;
        var node = this.get(index);
        if(node){
            node.value = val;
            return true;
        }
        return false;
    }

    insert(val,index){
        if(index <0 || index >= this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        var node = new Node(val);
        var prev = this.get(index-1);
        node.next = prev.next;
        prev.next = node;
        this.length++
        return true;
    }

    remove(index){
        if(index <0 || index >= this.length) return undefined;
        if(index === 0) return this.shift;
        if(index ===length-1) return this.pop;
        var node = this.get(index-1);
        var removed = node.next;
        node.next = removed.next;
        this.length--;
        return removed;
    }

    reverse(){
        var current = this.head;
        this.head = this.tail;
        this.tail = current;
        var node;
        var prev = null;
        for(let i=0; i<this.length;i++){
            node = current.next;
            current.next = prev;
            prev = current;
            current = node;
        }
        return this;
    }

    print(){
        var node = this.head;
        var arr = [];
        while(node){
            arr.push(node.value);
            node = node.next;
        }
        console.log(arr);
    }
}

var list = new SingleLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)
list.print()
console.log(list.pop());
list.print()
console.log(list.shift());
list.print();
console.log(list.unshift(50));
list.print();
console.log(list.get(2));
console.log(list.set(150,2));
list.print();
console.log(list.insert(175,3));
list.print();
console.log(list.remove(3))
list.print();
list.reverse();
list.print();