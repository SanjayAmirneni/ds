function radixSort(arr){
    const maxDigitCount = digitCount(arr);
    // console.log(maxDigitCount)
    for(let i =0; i<maxDigitCount;i++){
        let digitBuckets = Array.from({length:10},()=>[]);
        for(let j=0; j<arr.length;j++){
            let digit = getDigit(arr[j],i);
            // console.log(`digit: ${digit}`);
            digitBuckets[digit].push(arr[j]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;
}

function digitCount(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        count = Math.max( count, digitCountNum(arr[i]));
    }
    return count;
}

function digitCountNum(num){
    if (num == 0) return 1;
    return Math.floor(Math.log10(Math.abs(num)))+1;
}

function getDigit(num,i){
    return Math.floor((Math.abs(num)/Math.pow(10,i)))%10;
}


console.log(radixSort([21,1,-1,8,4,6,3,5]));