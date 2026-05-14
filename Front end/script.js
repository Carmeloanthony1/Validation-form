const form = document.getElementById("Identitas");
const nama = document.querySelector('input[name="nama"]');
const phonenumber = document.querySelector('input[name="kontak"]');
const email = document.querySelector('input[name="email"]');
const selectJurusan = document.getElementById('jurusan'); 

form.addEventListener('submit', (e) => {
    const validation_nama = nama.value.trim(); //ngilangin spasi
    const validation_phonenumber = phonenumber.value.trim();
    const validation_email = email.value.trim();
    if(validation_nama.length < 3){
        alert("Nama terlalu pendek");
        e.preventDefault(); 
        return;
    }

    if(/\d/.test(validation_nama)){    
        alert("Tidak boleh ada angka");
        e.preventDefault();
        return;
    }
    const regexhp = /^(\+62|0|62)\d{9,12}$/;
    if(!regexhp.test(validation_phonenumber)){
        alert("Nomor telfon harus minimal 11 digit atau maksimal 13 digit");
        e.preventDefault();
        return;
    }

    const regexemail = /[\w._]+@[a-z._].+\.[a-z]+/;
    if(!regexemail.test(validation_email)){
        alert("Format email salah");
        e.preventDefault();
        return;
    }

    alert("Berhasil di submit!");
}); 
