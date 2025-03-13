let arr = [2,4,6,8];
let d=arr[1]-arr[0]
if (!Array.isArray(arr)) {
    console.log("du lieu khong hop le")
} else {
    let index=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i+1]-d==arr[i]){
            index++;
        }
    }
    if(index==arr.length/2+1){
        console.log("true");
    }else{
        console.log("false");
    }
}