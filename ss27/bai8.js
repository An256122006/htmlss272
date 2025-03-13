let arr = 2941;
if (!isNaN(arr)) {
    let arr2 = [];
    if (arr2)
        for (let i = 0; i < 4; i++) {
            arr2[i] = arr % 10;
            arr = Math.floor(arr / 10);
        }
    arr2.sort().reverse();
    console.log(arr2.join(""));
}else{
    console.log("khong hop le");
}