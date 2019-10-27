var ket_qua = ""

function bam0() {
  ket_qua = ket_qua + "0"
  hienPhepTinh();
}

function bam1() { 
  ket_qua = ket_qua + "1"
  hienPhepTinh();
}

function bam2() {
  ket_qua += "2"
  hienPhepTinh();
}

function bam3() {
  ket_qua += "3"
  hienPhepTinh();
}

function bam4() {
  ket_qua += "4"
  hienPhepTinh();
}

function bam5() {
  ket_qua = ket_qua + "5"
  hienPhepTinh();
}

function bam6() {
  ket_qua = ket_qua + "6"
  hienPhepTinh();
}

function bam7() {
  ket_qua = ket_qua + "7"
  hienPhepTinh();
}
function bam8() {
  ket_qua = ket_qua + "8"
  hienPhepTinh();
}

function bam9() {
  ket_qua = ket_qua + "9"
  hienPhepTinh();
}

function cong() {
  ket_qua += "+"
  hienPhepTinh();
}

function tru() {
  ket_qua += "-"
  hienPhepTinh();
}

function nhan() {
  ket_qua += "*"
  hienPhepTinh();
}

function chia() {
  ket_qua += "/"
  hienPhepTinh();
}

function xoa() {
  ket_qua += ""
  hienPhepTinh();
}

function bang() {
  alert(eval(ket_qua));
  var inputKetQua = document.getElementById("ket_qua");
  inputKetQua.value = eval(ket_qua);
  ket_qua = "";
}

function reset() {
  ket_qua = "";
  hienPhepTinh();
}

function hienPhepTinh() {
  var inputPhepTinh = document.getElementById("phep_tinh");
  inputPhepTinh.value = ket_qua;
}