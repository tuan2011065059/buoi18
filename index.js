
document.getElementById('updateButton').onclick = function(){
    let array = [1, 2, 3, 4, 5, 6, 7];
    let giaTriGoc = +document.getElementById('originalValue').value;
    let giaUpdate = +document.getElementById('newValue').value;
    let thongBao ='';
    for(let index =0; index < array.length; index++){
        if(giaTriGoc == array[index]){
            array[index] = giaUpdate;
            thongBao = 'cập nhật thành công'
        }
        else{
            thongBao = 'không tìm thấy'
        }
    }
    document.getElementById('arrNumber').innerHTML =`[${array}]`;
    document.getElementById('message').innerHTML = thongBao;

}