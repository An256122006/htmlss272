let arr=[1,2,3,4,5,6,7,8];
let a=+prompt("moi ban nhap so phan tu");
let arr2=[];
let index=0;
for(let i=0;i<arr.length/a;i++){
    arr2[i]=[];
    for(let j=0;j<a;j++){
        arr2[i][j]=arr[index];
        index++;
    }
    console.log(arr2[i].join(" "));
}