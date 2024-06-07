
document.getElementById('updateButton').onclick = function(){
    let array = [1, 2, 3, 4, 5, 6, 7];
    let giaTriGoc = +document.getElementById('originalValue').value;
    let giaUpdate = +document.getElementById('newValue').value;
    let thongBao ='không tìm thấy giá trị';
    for(let index =0; index < array.length; index++){
        if(giaTriGoc == array[index]){
            array[index] = giaUpdate;
            thongBao = 'cập nhật thành công'
        }
        
    }
    document.getElementById('arrNumber').innerHTML =`[${array}]`;
    document.getElementById('message').innerHTML = thongBao;

}


// bài tập luyện mảng
let arrNumber = [];
document.getElementById('ketQua').onclick = function(){
    let tongSoDuong = 0;
    let demSoDuong =0;
    // let soDuongNhoNhat = arrNumber[0];
    let soDuongNhoNhat = Infinity;

    let arr = +document.getElementById('giaTri').value;
    arrNumber.push(arr);
    for(index = 0; index < arrNumber.length; index ++){
        if(arrNumber[index] > 0){
            tongSoDuong += arrNumber[index];
            demSoDuong ++;
            if(soDuongNhoNhat > arrNumber[index]){
                soDuongNhoNhat = arrNumber[index];
            }
        }
    }
    document.getElementById('number').innerHTML = `[${arrNumber}]`;
    document.getElementById('tongSoDuong').innerHTML = `tổng số dương trong mảng là ${tongSoDuong}`;
    document.getElementById('demSoDuong').innerHTML = `có ${demSoDuong} trong mảng`;
    document.getElementById('soDuongNhoNhat').innerHTML = `số dương nhỏ nhất trong bảng là ${soDuongNhoNhat}`;

}

