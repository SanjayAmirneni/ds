class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        var node = new Node(value);
        if(!this.root){
            this.root = node;
            return this;
        }
        var current = this.root;
        while(true){
            if(current.value === value) return undefined;
            if( value < current.value ){
                if(current.left == null){
                    current.left = node;
                    return this;
                }
                current = current.left;
            }
            if( value > current.value ){
                if(current.right == null ){
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(value){
        if(!this.root) return null;
        var current = this.root;
        while(true){
            if(value === current.value) return current;
            if(value < current.value){
                if(current.left === value) return current.left;
                current = current.left;
            }
            if(value > current.value){
                if(current.right === value) return current.right;
                current = current.right;
            }
        }
    }
}


var bst = new BinarySearchTree();
console.log(bst.insert(10));
console.log(bst.insert(20));
console.log(bst.insert(5));
console.log(bst.find(5));