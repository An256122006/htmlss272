let arr = [1, 2, 3, 5];
if (!Array.isArray(arr)) {
    console.log("du lieu khong hop le")
} else {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = (max + min) * max / 2;
    let sum2 = arr.reduce(function (a, b) {
        return a + b;
    }, 0);
    document.write(sum - sum2);
}