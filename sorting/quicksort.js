function pivot(arr,start=0,end=arr.length-1){

    const swap = (arr,idx1,idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    const pivot = arr[start];
    let swapidx = start;
    for(let i=start+1; i<=end; i++){
        if(arr[pivot] > arr[i]){
            swapidx++;
            swap(arr,i,swapidx);
        }
    }

    swap(arr,start,swapidx);

    return swapidx;
}


function quicksort(arr,left=0,right=arr.length-1){
    if(left < right){
        let pivotidx = pivot(arr,left,right);
        quicksort(arr,left,pivotidx-1);
        quicksort(arr,pivotidx+1,right);
    }
    return arr;
}

console.log(quicksort([-9,7,2,6,8,1,3,7,34]));