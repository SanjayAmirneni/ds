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


    BFS(){
        var data = [];
        var queue = [];
        queue.push(this.root);
        var current;
        while(queue.length){
            current = queue.shift();
            data.push(current.value);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }   
        return data;
    }

    DFSPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);      
        }
        traverse(this.root);
        return data;
    }

    DFSPostOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

}



var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());