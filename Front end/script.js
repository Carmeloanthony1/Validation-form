const form = document.getElementById("Identitas");
const nama = document.querySelector('input[name="nama"]');
const phonenumber = document.querySelector('input[name="kontak"');
const email = document.querySelector('input[name="email"]');
const selectJurusan = document.getElementById('jurusan'); 

const validation_nama = nama.value.trim(); //ngilangin spasi
const validation_phonenumber = phonenumber.value.trim();
const regexhp = /^(\+62|0|62)\d{9,12}$/;
const regexemail = /[\w._]+@[a-z._].+\.[a-z]+/;
if(nama.length < 3){
    alert("Nama terlalu pendek");
    return;
}
if(/\d/.test(nama)){
    alert("Tidak boleh ada angka");
    return;
}

if(regexhp.test(phonenumber)){
    alert("Nomor telfon harus minimal 11 digit atau maksimal 13 digit");
    return;
}

if(regexemail.test(email)){
    alert("Format email salah");
    return;
}
