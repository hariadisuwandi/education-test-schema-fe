function validasi(){
  var validasiHuruf = /^[a-zA-Z ]+$/;
  var nama = document.getElementById("nama");
  if (nama.value.match(validasiHuruf)) {
     alert("Hallo "+ nama.value +" selamat datang!");
  } else {
     alert("Sistem kami menolak untuk inputan berisi angka " + nama.value);
     nama.value="";
     nama.focus();
     return false;
  }
}