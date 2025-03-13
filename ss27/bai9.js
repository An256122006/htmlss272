let arr =[5,8,6,3,4,2,7];
let arr2=arr.filter(function(a,b){
    return a%2==0;
});
arr2.sort();
let index=0;
let newarr=arr.map(function(a,b){
    if(a%2==0){
        return arr2[index++];
    }
    return a;
});
console.log(newarr);