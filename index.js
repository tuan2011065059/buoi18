
document.getElementById('updateButton').onclick = function () {
    let array = [1, 2, 3, 4, 5, 6, 7];
    let giaTriGoc = +document.getElementById('originalValue').value;
    let giaUpdate = +document.getElementById('newValue').value;
    let thongBao = 'không tìm thấy giá trị';
    for (let index = 0; index < array.length; index++) {
        if (giaTriGoc == array[index]) {
            array[index] = giaUpdate;
            thongBao = 'cập nhật thành công'
        }

    }
    document.getElementById('arrNumber').innerHTML = `[${array}]`;
    document.getElementById('message').innerHTML = thongBao;

}
let soSanh = ''
let chiSoAm = 0;
let chiSoDuong =0

// bài tập luyện mảng
let arrNumber = [];
document.getElementById('ketQua').onclick = function () {
    let tongSoDuong = 0;
    let demSoDuong = 0;
    // let soDuongNhoNhat = arrNumber[0];
    let soDuongNhoNhat = Infinity;
    let soChanCuoiCung = -1;
    let soNguyen =0;

    

    let arr = +document.getElementById('giaTri').value;
    arrNumber.push(arr);
    for (index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] > 0) {
            tongSoDuong += arrNumber[index];
            demSoDuong++;
            if (soDuongNhoNhat > arrNumber[index]) {
                soDuongNhoNhat = arrNumber[index];
            }
        }
        if (arrNumber[index] % 2 == 0) {
            soChanCuoiCung = arrNumber[index];
        }
        soNguyen++;
        if(arrNumber[index < 0]){
            chiSoAm++
        }else{
            chiSoDuong++
        }

    }

    document.getElementById('ketQuaTangDan').onclick = function () {
        for (let i = 0; i < arrNumber.length - 1; i++) {
            for (let j = 0; j < arrNumber.length - i - 1; j++) {
                if (arrNumber[j] > arrNumber[j + 1]) {
                    let temp = arrNumber[j];
                    arrNumber[j] = arrNumber[j + 1];
                    arrNumber[j + 1] = temp;
                }
            }
        }
        document.getElementById('giaTriTangDan').innerHTML = `mảng sắp xếp theo giá trị tăng dần ${arrNumber}`;
    }


    let soNguyenToDauTien = null;
    ketQua = ''

    for (let index = arrNumber.length - 1; index >= 0; index--) {
        let dem = 0;

        for (let soChia = 1; soChia <= arrNumber[index]; soChia++) {
            if (arrNumber[index] % soChia == 0) {
                dem++;
            }
        }


        if (dem == 2) {
            soNguyenToDauTien = arrNumber[index];
            break;
        }
    }

    if (soNguyenToDauTien !== null) {
        ketQua = `Số nguyên tố đầu tiên trong mảng là ${soNguyenToDauTien}`;
    } else {
        ketQua = "Không tìm thấy số nguyên tố trong mảng";
    }


    if(chiSoAm < chiSoDuong){
        soSanh = 'số âm ít hơn số dương'
    }else if(chiSoAm = chiSoDuong){
        soSanh = 'số âm bằng với số dương'
    }
    else{
        soSanh = 'so âm nhiều hơn số dương'
    }
    

    document.getElementById('number').innerHTML = `[${arrNumber}]`;
    document.getElementById('tongSoDuong').innerHTML = `tổng số dương trong mảng là ${tongSoDuong}`;
    document.getElementById('demSoDuong').innerHTML = `có ${demSoDuong}số dương phần tử trong mảng`;
    document.getElementById('soDuongNhoNhat').innerHTML = `số dương nhỏ nhất trong bảng là ${soDuongNhoNhat}`;
    document.getElementById('soChanCuoiCung').innerHTML = `số chẵn cuối cùng trong bảng là ${soChanCuoiCung}`;

    document.getElementById('soNguyenToDauTien').innerHTML = ketQua;
    document.getElementById('soNguyen').innerHTML = `có ${soNguyen} số nguyên trong mảng`;

    document.getElementById('soSanh').innerHTML = soSanh;

}
document.getElementById('doiCho').onclick = function () {
    let viTri1 = +document.getElementById('giaTri1').value;
    let viTri2 = +document.getElementById('giaTri2').value;
    let temp = arrNumber[viTri1];
    arrNumber[viTri1] = arrNumber[viTri2];
    arrNumber[viTri2] = temp;
    document.getElementById('doiViTri').innerHTML = `mảng sau khi hoán đổi là ${arrNumber}`;


}
