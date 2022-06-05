class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }

    insert(value){
        this.values.push(value);
        this.bubbleup();
    }

    bubbleup(){
        var idx = this.values.length - 1;
        var element = this.values[idx];
        while(idx > 0){
            var pidx = Math.floor((idx-1)/2);
            var parent = this.values[pidx];
            if(element <= parent) break;
            this.values[pidx] = element;
            this.values[idx] = parent;
            idx = pidx;
        }
    }

    pop(){
        // console.log(this.values)
        var element = this.values[0];
        var lastElement = this.values.pop();
        if(this.values.length > 0){
            this.values[0]=lastElement;
            this.sinkdown();
        }

        return element;
    }

    sinkdown(){
        var element = this.values[0];
        var idx = 0;
        var leftidx, rightidx;
        // console.log(this.values)
        while(true){
            var swap = null;
            leftidx = (2*idx)+1;
            rightidx = (2*idx)+2;
            if(leftidx < this.values.length){
                if(this.values[leftidx] > element){
                    swap = leftidx;
                }
            }

            if(rightidx < this.values.length){
                if((swap === null && this.values[rightidx] > element) || (swap!==null && this.values[rightidx] > this.values[leftidx])){
                    swap = rightidx;
                }
            }

            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
            // console.log(this.values);
        }
    }


}


let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.values);