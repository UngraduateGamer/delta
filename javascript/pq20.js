function largestNumber(arr,num){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
let arr = [1,3,15,4,18,5,19,100];
let num =8;
let res = largestNumber(arr,num)
console.log(res);

