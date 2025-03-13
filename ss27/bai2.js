let str = [];
let choice = '';
do {
    choice = +prompt(`
        Nhập danh sách sinh viên.
        Hiển thị danh sách sinh viên.
        Tìm sinh viên theo tên.
        Xóa sinh viên khỏi danh sách.
        Thoát.
        `);
    switch (choice) {
        case 1:
            scan(str);
            break;
        case 2:
            console.log(str);
            break;
        case 3:
            let name = prompt("moi ban nhap ten tim kiem").trim();
            let str2=str.filter(function(a,b){
                return str[b].includes(name);
            });
            console.log(str2);
            break;
        case 4:
            let name2 = prompt("moi ban nhap ten can xoa").trim();
            let str3=str.filter(function(a,b){
                return !str[b].includes(name2);
            });
            console.log(str3);
            break;
        default:
            break;
    }
} while (choice !== 5);

function scan(str) {
    let a=+prompt("moi ban nhap so luong sinh vien");
    for(let i=0;i<a;i++){
        str[i]=prompt("moi ban nhap ten sinh vien:").trim();
    }
}